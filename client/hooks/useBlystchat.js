import { useState } from 'react';

// CRITICAL: Point to the Express backend port 3001
const API_ENDPOINT = 'http://localhost:3001/api/groq-ask';

export const useBlystchat = () => { // Ensure this is lowercase 'c'
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSend = async (e) => {
        if (e) e.preventDefault();
        const trimmedInput = input.trim();
        if (!trimmedInput || isLoading) return;

        const userMessage = { role: 'user', content: trimmedInput };
        
        // 1. Add user message and empty AI placeholder using a single update
        setMessages(prev => [
            ...prev, 
            userMessage, 
            { role: 'ai', content: '' } // The empty AI message
        ]);
        
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: trimmedInput }),
            });

            if (!response.ok || !response.body) {
                const errorText = await response.text();
                // Throw an error that includes the status code for debugging
                throw new Error(`Server Error (${response.status}): ${errorText || 'Non-streamable error.'}`);
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                
                // 💥 FIX: Use the functional update to safely append the chunk
                setMessages(prev => {
                    // Create a new array from the previous state
                    const newMessages = [...prev];
                    const lastMessageIndex = newMessages.length - 1;

                    // This MUST be the AI message we just added (the last one)
                    if (newMessages[lastMessageIndex].role === 'ai') {
                        newMessages[lastMessageIndex].content += chunk;
                    }
                    return newMessages;
                });
            }

        } catch (err) {
            console.error('Frontend Fetch Error:', err);
            
            // Clean up: Replace the empty AI message with the error message
            setMessages(prev => {
                const newMessages = [...prev];
                const lastMessageIndex = newMessages.length - 1;
                
                if (newMessages[lastMessageIndex].role === 'ai') {
                    newMessages[lastMessageIndex] = { 
                        role: 'error', 
                        // Include the actual error message for better debugging
                        content: `Error: Connection failed. Details: ${err.message}`
                    };
                }
                return newMessages;
            });
            // Set the main error state
            setError('Sorry, I can\'t connect to the AI. See console for details.');
        } finally {
            // CRITICAL: Release the button regardless of success or failure
            setIsLoading(false); 
        }
    };

    return { messages, input, setInput, handleSend, isLoading, error };
};