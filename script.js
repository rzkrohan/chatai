// DOM Elements
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.getElementById('messages');
const loadingIndicator = document.getElementById('loadingIndicator');

// State
let isLoading = false;
let conversationHistory = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    autoResizeTextarea();
});

// Setup Event Listeners
function setupEventListeners() {
    chatForm.addEventListener('submit', handleSendMessage);
    messageInput.addEventListener('keydown', handleKeyDown);
    messageInput.addEventListener('input', autoResizeTextarea);
}

// Handle Enter key submission
function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        chatForm.dispatchEvent(new Event('submit'));
    }
}

// Auto resize textarea
function autoResizeTextarea() {
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
}

// Handle Send Message
async function handleSendMessage(e) {
    e.preventDefault();

    const message = messageInput.value.trim();
    
    if (!message || isLoading) return;

    // Add user message to chat
    addMessageToChat(message, 'user');
    messageInput.value = '';
    autoResizeTextarea();

    // Show loading
    showLoading();
    isLoading = true;

    try {
        // Send message to backend
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                conversationHistory: conversationHistory
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.response;

        // Add AI response to chat
        addMessageToChat(aiResponse, 'ai');

        // Update conversation history
        conversationHistory.push({ role: 'user', content: message });
        conversationHistory.push({ role: 'assistant', content: aiResponse });

    } catch (error) {
        console.error('Error:', error);
        
        let errorMessage = 'Maaf, terjadi kesalahan. Silakan coba lagi.';
        
        if (error.message.includes('Failed to fetch')) {
            errorMessage = 'Tidak dapat terhubung ke server. Pastikan internet Anda aktif.';
        } else if (error.message.includes('401')) {
            errorMessage = 'Error autentikasi. Silakan coba lagi nanti.';
        } else if (error.message.includes('500')) {
            errorMessage = 'Server error. Tim kami sedang memperbaiki masalah ini.';
        }
        
        addMessageToChat(errorMessage, 'ai');
    } finally {
        hideLoading();
        isLoading = false;
    }

    // Scroll to bottom
    scrollToBottom();
}

// Add Message to Chat
function addMessageToChat(text, sender) {
    // Remove welcome message if it exists
    const welcomeMessage = messagesContainer.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.innerHTML = sender === 'user' ? '👤' : '🤖';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.textContent = text;

    contentDiv.appendChild(textDiv);

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);

    messagesContainer.appendChild(messageDiv);
}

// Show Loading Indicator
function showLoading() {
    loadingIndicator.classList.remove('hidden');
}

// Hide Loading Indicator
function hideLoading() {
    loadingIndicator.classList.add('hidden');
}

// Scroll to Bottom
function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
