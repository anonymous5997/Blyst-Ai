// --- File: client/src/components/BlystAIChat.jsx (FINAL FIX) ---

import React from 'react';
// 🚨 IMPORTANT: Ensure this path is correct for your project structure
import { useBlystchat } from '../hooks/useBlystchat'; 

// Function to clean the output text (remove the <Answer>: prefix)
const cleanAnswer = (content) => {
    // If the message is from the AI, try to clean the BLYST prefix
    return content.startsWith('<Answer>:') 
        ? content.replace('<Answer>:', '').trim()
        : content;
};

const BlystAIChat = () => {
    // Use the custom chat hook
    const { messages, input, setInput, handleSend, isLoading, error } = useBlystchat();

    return (
        <div className="conversational-intelligence-container p-6 border rounded-lg bg-gray-900 text-white">
            <h3 className="text-xl font-semibold mb-4">Conversational Intelligence (BLYST AI)</h3>

            {/* Display Messages */}
            <div className="message-area chat-history-container mb-4 overflow-y-auto max-h-64 space-y-3">
                {messages.length === 0 && (
                    <p className="text-gray-400">
                        Ask BLYST AI a business intelligence question.
                    </p>
                )}
                {messages.map((m, index) => (
                    <div 
                        key={index} 
                        className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-indigo-800 text-right' : 'bg-green-800 text-left'}`}
                    >
                        <p className="font-bold text-xs">
                            {m.role === 'user' ? 'You' : 'BLYST AI'}
                        </p>
                        <p className="text-sm whitespace-pre-wrap">
                            {cleanAnswer(m.content)}
                        </p>
                    </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                    <div className="text-center text-yellow-400">BLYST is thinking...</div>
                )}
            </div>

            {/* Error Message */}
            {error && <div className="error-message text-red-500 mb-4">{error}</div>}

            {/* Input Form */}
            <form onSubmit={handleSend} className="input-form flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Blyst AI..."
                    className="flex-grow p-3 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:border-indigo-500"
                    disabled={isLoading}
                />
                <button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-700 transition"
                >
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
};

export default BlystAIChat;