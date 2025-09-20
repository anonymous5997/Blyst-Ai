// --- File: client/src/hooks/useBlystchat.js (FINAL FIX) ---

import { useState, useCallback } from 'react';

// FIX: Define the live Render URL as the default production fallback.
// This ensures that when VITE_PUBLIC_API_URL is NOT set (e.g., in Netlify production), 
// it correctly points to the public backend service.
const DEFAULT_PROD_URL = 'https://blyst-ai.onrender.com';

// Use environment variable for the API URL, falling back to the live Render URL.
const BASE_URL = import.meta.env.VITE_PUBLIC_API_URL || DEFAULT_PROD_URL; 
const API_ENDPOINT = `${BASE_URL}/api/groq-ask`;

const useBlystchat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSend = useCallback(async (e) => {
        e.preventDefault();
        const userQuestion = input.trim();

        if (!userQuestion) return;

        // 1. Clear error and set loading state
        setError(null);
        setIsLoading(true);

        // 2. Add user message to state
        const newUserMessage = { role: 'user', content: userQuestion };
        setMessages(prev => [...prev, newUserMessage]);
        setInput(''); // Clear input box

        // 3. Prepare for AI response stream
        let aiResponseContent = '';
        const aiMessagePlaceholder = { role: 'ai', content: '' };
        setMessages(prev => [...prev, aiMessagePlaceholder]);

        try {
            // 4. Fetch the stream from the backend
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: userQuestion }),
            });

            if (!response.ok) {
                // If the response is not OK (e.g., 500 server error)
                // We show the status and the API_ENDPOINT for easy debugging
                throw new Error(`Server responded with status: ${response.status} ${response.statusText}. Target: ${API_ENDPOINT}`);
            }

            if (!response.body) {
                throw new Error("No response body received from the server.");
            }

            // 5. Read the stream chunk by chunk
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                aiResponseContent += chunk;

                // Update the last message (the AI placeholder) with the accumulating content
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = aiResponseContent;
                    return newMessages;
                });
            }

        } catch (err) {
            console.error('Chat error:', err);
            // Show a more specific error message based on the failure
            setError(`Failed to connect to AI Advisor. Reason: ${err.message}.`);
            
            // Remove the last message (the placeholder) if streaming failed immediately
            setMessages(prev => prev.slice(0, prev.length - 1));
        } finally {
            setIsLoading(false);
        }
    }, [input, setInput, setMessages, setIsLoading, setError]);

    return { messages, input, setInput, handleSend, isLoading, error };
};

export { useBlystchat };