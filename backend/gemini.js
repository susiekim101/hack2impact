import {GoogleGenAI} from '@google/genai';

const genAI = new GoogleGenAI({apiKEY: process.env.API_KEY});

export default genAI;