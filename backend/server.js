// --- File: backend/server.js (FINAL CORRECTED VERSION) ---

import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // Loads .env variables like PORT (for local)
import { streamText } from 'ai';
import { groq } from '@ai-sdk/groq'; 

// 1. Setup
const app = express();
// Render will automatically set PORT to 10000. For local, it defaults to 3001.
const PORT = process.env.PORT || 3001; 

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// 2. CORS Configuration (CRITICAL FIX: Allow the official blystai.com URL)
const allowedOrigins = [
    'https://blystai.com', // ⬅️ The FIX for the CORS error
    'https://blyst-ai.onrender.com', // Render backend URL
    'http://localhost:8080', // For local development testing
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or server-to-server) and the allowed origins
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            // Log the blocked origin for debugging
            console.warn(`CORS blocked request from origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'POST',
    credentials: true,
}));

// 3. API Route for Chat Streaming
app.post('/api/groq-ask', async (req, res) => {
    // 3.1 Set Headers for Streaming
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked',
        'Connection': 'keep-alive',
    });

    try {
        const { question } = req.body;
        
        if (!question) {
            res.status(400).end('Error: Question is required.');
            return;
        }

        console.log(`Received question: ${question}`);

        // Get the API key from the environment (set on Render)
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            throw new Error("GROQ_API_KEY is not set in environment variables.");
        }

        // Define the BLYST persona and model
        const systemInstruction = "You are a concise business intelligence advisor named BLYST. Give short, data-driven, and actionable advice. Always respond in the format: <Answer>: [Your concise response]";
        const modelId = 'llama-3.1-8b-instant'; 

        // The groq() function will automatically use the GROQ_API_KEY from process.env
        const result = await streamText({
            model: groq(modelId), 
            system: systemInstruction,
            prompt: question,
            config: {
                temperature: 0.2,
            }
        });

        // 3.3 Stream the response to the client
        for await (const textPart of result.textStream) {
            res.write(textPart);
        }

        // End the response stream
        res.end();
        
    } catch (error) {
        console.error('💥 Groq API Error:', error.message);
        
        const errorMessage = `\nError: Failed to connect to BLYST AI Advisor. Details: ${error.message}.`;
        res.write(errorMessage);
        res.end();
    }
});

// 4. Start Server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});