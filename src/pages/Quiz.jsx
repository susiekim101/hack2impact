import QuizBar from "../components/QuizBar.jsx";
import QuizTitle from "../components/QuizTitle.jsx";

function Quiz() {
  return (
    <>
      <QuizBar currentQuestion={3} />
      <QuizTitle title="Color Preferences" />
    </>
  );
}

export default Quiz;
