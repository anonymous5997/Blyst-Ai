// --- File: backend/server.js (FINAL CORRECTED VERSION) ---
import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // To load GROQ_API_KEY from .env
import { streamText } from 'ai';
import { groq } from '@ai-sdk/groq'; // This is the groq model provider function

// 🚨 CRITICAL FIX: Explicitly set the environment variable
// This bypasses the file-loading issue and ensures the key is available.
// In a production app, you should use a secure method to manage keys.
// Replace the placeholder with your actual key.
process.env.GROQ_API_KEY = "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"
// 1. Setup
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // For parsing application/json bodies
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// 2. CORS Configuration 
app.use(cors({
    origin: 'http://localhost:8080', // Adjust if your frontend port is different
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

        // Define the BLYST persona and model
        const systemInstruction = "You are a concise business intelligence advisor named BLYST. Give short, data-driven, and actionable advice. Always respond in the format: <Answer>: [Your concise response]";
        const modelId = 'llama-3.1-8b-instant'; 

        // The streamText function will now correctly read the GROQ_API_KEY from process.env
        const result = await streamText({
            model: groq(modelId), // Correct syntax for @ai-sdk/groq
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
        // --- CRITICAL ERROR LOGGING ---
        console.error('💥 Groq API Error:', error.message);
        // -----------------------------
        
        // Write the error message to the stream before ending
        const errorMessage = `\nError: Failed to connect to BLYST AI Advisor. Details: ${error.message}. Check API key and server console.`;
        res.write(errorMessage);
        res.end();
    }
});

// 4. Start Server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
