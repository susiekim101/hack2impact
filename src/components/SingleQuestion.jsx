import styles from "../styles/Quiz.module.css";

function SingleQuestion({
  question,
  currentIndex,
  total,
  formValues,
  handleChange,
  onPrevClick,
  onNextClick,
}) {
  return (
    <div className={styles.quizContainer}>
      <QuizBar currentQuestion={currentIndex + 1} />
      <QuizTitle title={question.sectionTitle} />
      <div className={styles.label}>{question.label}</div>

      {/* Render input based on question type */}
      {question.type === "text" && (
        <input
          type="text"
          className={styles.text}
          value={formValues[question.id] || ""}
          onChange={(e) => handleChange(question.id, e.target.value)}
        />
      )}
      {/* add others... */}

      <div className={styles.footer}>
        <button
          type="button"
          onClick={onPrevClick}
          disabled={currentIndex === 0}
          className={styles.previous}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNextClick}
          disabled={currentIndex === total - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SingleQuestion;
