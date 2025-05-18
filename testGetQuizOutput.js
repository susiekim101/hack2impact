import getQuizOutput from "./src/utils/getQuizOutput.js";

const sampleClientPreferences = {
  name: "Alice",
  sensoryTriggers: ["bright lights", "loud noises"],
  colorPreferences: ["soft blues", "earth tones"],
  lifestyleNeeds: ["calm workspace", "natural light"],
};

async function test() {
  try {
    const summary = await getQuizOutput(sampleClientPreferences);
    console.log("Text Summary:", summary.descriptionSummary);
    console.log("Image Prompts:", summary.images);
  } catch (error) {
    console.error("Error generating text summary:", error);
  }
}

test();
