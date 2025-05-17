import { useState } from "react";
import QuizBar from "../components/QuizBar.jsx";
import QuizTitle from "../components/QuizTitle.jsx";
import quizQuestions from "../quizQuestions.js";

const allQuestions = quizQuestions.flatMap((section) =>
  section.questions.map((q) => ({ ...q, sectionTitle: section.section }))
);

const firstSectionTitle = quizQuestions[0].section;
const firstSectionQuestions = allQuestions.filter(
  (q) => q.sectionTitle === firstSectionTitle
);

function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const isInFirstSection = questionIndex < firstSectionQuestions.length;

  const progressQuestionNumber = isInFirstSection
    ? 1
    : questionIndex - firstSectionQuestions.length + 2;

  const currentQuestion = allQuestions[questionIndex];

  const renderFirstSection = (
    <>
      <QuizBar currentQuestion={progressQuestionNumber} />
      <QuizTitle title={firstSectionTitle} />
      <h2>{firstSectionTitle}</h2>
      {firstSectionQuestions.map((question, idx) => (
        <p key={idx}>{question.label}</p>
      ))}
      <button onClick={() => setQuestionIndex(firstSectionQuestions.length)}>
        Next
      </button>
    </>
  );

  const renderOtherQuestions = (
    <>
      <QuizBar currentQuestion={progressQuestionNumber} />
      <QuizTitle title={currentQuestion.sectionTitle} />
      <p>{currentQuestion.label}</p>
      <button
        onClick={() => setQuestionIndex((prev) => Math.max(prev - 1, 0))}
        disabled={questionIndex === 0}
      >
        Previous
      </button>
      <button
        onClick={() =>
          setQuestionIndex((prev) =>
            Math.min(prev + 1, allQuestions.length - 1)
          )
        }
        disabled={questionIndex === allQuestions.length - 1}
      >
        Next
      </button>
    </>
  );

  return <>{isInFirstSection ? renderFirstSection : renderOtherQuestions}</>;
}

export default Quiz;
