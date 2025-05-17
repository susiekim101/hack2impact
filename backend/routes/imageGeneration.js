import express from 'express';
import genAI from '../geminiClient.js';
import fs from 'fs';

const router = express.Router();

router.post('/generate-image', async (req, res) => {
    const { prompt } = req.body;

    try {
        const model = genAI.getGenerativeModel( {model: 'gemini-2.0-flash-preview-image-generation'});

        const result = await model.generateContent({
            contents: prompt,
            config: {
                responseModalities: [IMAGE],
            },
        });

        const imagePart = result.response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
        const base64 = imagePart?.inlineData?.data;
    } catch (error) {
        console.error("Image generation failed:", error.message);
        res.status(500).json({error: 'Image generation failed'});
    }
});

export default router;

// <img src={`data:image/png;base64,${base64}`} />