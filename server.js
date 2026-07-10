import express from 'express';
import cors from 'cors';
import { deepseek } from './deepseek.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, conversationHistory } = req.body;

        if (!message || message.trim() === '') {
            return res.status(400).json({
                error: 'Message cannot be empty'
            });
        }

        console.log('User message:', message);

        // Call DeepSeek API
        const response = await deepseek(message);

        console.log('AI response:', response);

        res.json({
            response: response,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({
            error: 'Failed to process message',
            message: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Rizky AI Server is running',
        model: 'DeepSeek'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        path: req.path
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Rizky AI Server running on http://localhost:${PORT}`);
    console.log(`📡 Powered by DeepSeek`);
});
