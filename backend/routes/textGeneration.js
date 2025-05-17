import express from 'express';
import genAI from '../geminiClient.js';

const router = express.Router();

router.post('/generate-text', async (req, res) => {
    const {prompt} = req.body;
    try{
        const model = genAI.getGenerativeModel({model: 'gemini-2.0-flash'});

        const result = await model.generateContent(prompt);
        const text = result.response.candidates?.[0].content?.parts?.[0]?.text;

        res.json({text});
    } catch (error) {
        console.error('Text generation failed:', error.message);
        res.status(500).json({error:'Text generation failed'});
    }
});

export default router;