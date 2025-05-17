import generateImage from '../components/ImageSummary';
import generateText from '../components/TextSummary';

const prompt1 = `You are an interior design specialist focused on creating trauma-informed spaces. A client has completed a personal assessment describing their preferences, sensory triggers, and lifestyle needs. The assessment is provided below in JSON format.
Please generate an image for the interior design of the house with the client's preferred themed, colors, and mood.
Here is the client’s assessment:
${JSON.stringify(quizResult, null, 2)}`;
const prompt2 = `You are an interior design specialist focused on creating trauma-informed spaces. A client has completed a personal assessment describing their preferences, sensory triggers, and lifestyle needs. The assessment is provided below in JSON format.
Please generate an image simple color palette with 5 color themes that the client prefers.
Here is the client’s assessment:
${JSON.stringify(quizResult, null, 2)}`;
const prompt3 = `You are an interior design specialist focused on creating trauma-informed spaces. A client has completed a personal assessment describing their preferences, sensory triggers, and lifestyle needs. The assessment is provided below in JSON format.
Please generate an image of furnitur with the client's suitable texture, style, and patterns
Here is the client’s assessment:
${JSON.stringify(quizResult, null, 2)}`;

const [img1, img2, img3] = await Promise.all([
    generateImage(prompt1),
    generateImage(prompt2),
    generateImage(prompt3),
]);