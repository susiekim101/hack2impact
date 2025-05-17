import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import textRoutes from "./routes/textGeneration.js";
import imageRoutes from "./routes/imageGeneration.js";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api", textRoutes);
app.use("/api", imageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/*
const API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/generate-text', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post (
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}',
            {
                contents: [
                    {
                        parts: [{text: prompt}],
                    },
                ],
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const resultText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        res.json({text: resultText});
    } catch (error) {
        console.error('Gemini API error', error.response?.data || error.message);
        res.status(500).json({error: 'Failed to generate text'});
    }
});

app.post('/api/generate-image', async (req, res) => {
    const { prompt } = req.body;
    
    try {
        const response = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}',
            {
                contents: [
                    {
                        parts: [{text: prompt}],
                    },
                ],
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

    }

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
*/
