import getQuizOutput from "./src/utils/getQuizOutput.js";

const sampleClientPreferences = {
  name: "Rianna",
  sensoryTriggers: ["darkness", "lack of privacy"],
  colorPreferences: ["pastels", "pinks and rosy"],
  lifestyleNeeds: ["lots of furniture", "religious"],
};

async function test() {
  try {
    const summary = await getQuizOutput(sampleClientPreferences);
    console.log("Text Summary:", summary.descriptionSummary);
    //console.log("Image Prompts:", summary.images);
  } catch (error) {
    console.error("Error generating text summary:", error);
  }
}

test();
