import { db } from "../src/firebase/config.js";
import { collection, doc, setDoc } from "firebase/firestore";
import { readFileSync } from "fs";
const quizQuestions = JSON.parse(
  readFileSync("./scripts/quizQuestions.json", "utf-8")
);

async function uploadQuiz() {
  try {
    for (const section of quizQuestions) {
      const sectionRef = doc(collection(db, "questions"), section.section);
      await setDoc(sectionRef, {
        section: section.section,
        questions: section.questions,
      });
      console.log(`Uploaded section: ${section.section}`);
    }
    console.log("Quiz questions uploaded successfully");
  } catch (error) {
    console.error("Error uploading quiz questions", error);
  }
}

uploadQuiz();
