import { useState } from "react";
import QuizBar from "../components/QuizBar.jsx";
import QuizTitle from "../components/QuizTitle.jsx";
import quizQuestions from "../utils/quizQuestions.js";
import styles from "../css/Quiz.module.css";
import Question2 from "../components/Question2.jsx";
import Nav from "../components/NavigationButton.jsx";

const allQuestions = quizQuestions.flatMap((section) =>
  section.questions.map((q) => ({ ...q, sectionTitle: section.section }))
);

const firstSectionTitle = quizQuestions[0].section;
const firstSectionQuestions = allQuestions.filter(
  (q) => q.sectionTitle === firstSectionTitle
);

function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [formValues, setFormValues] = useState({});

  const isInFirstSection = questionIndex < firstSectionQuestions.length;

  const progressQuestionNumber = isInFirstSection
    ? 1
    : questionIndex - firstSectionQuestions.length + 2;

  const currentQuestion = allQuestions[questionIndex];

  const handleChange = (questionId, value) => {
    setFormValues((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const groupedQuestions = [];
  let tempSmallGroup = [];

  for (let i = 0; i < firstSectionQuestions.length; i++) {
    const current = firstSectionQuestions[i];

    if (current.style === "small") {
      tempSmallGroup.push(current);
    } else {
      if (tempSmallGroup.length > 0) {
        groupedQuestions.push([...tempSmallGroup]);
        tempSmallGroup = [];
      }
      groupedQuestions.push([current]);
    }
  }
  if (tempSmallGroup.length > 0) {
    groupedQuestions.push([...tempSmallGroup]);
  }

  const renderFirstSection = (
    <div className={styles.wrapper}>
      <div className={styles.quizContainer}>
        <div>
          <QuizBar currentQuestion={progressQuestionNumber} />
          <QuizTitle title={firstSectionTitle} />
        </div>
        <form className={styles.form}>
          {groupedQuestions.map((group, groupIdx) => {
            const isRow = group[0].style === "small";

            return (
              <div
                key={groupIdx}
                className={isRow ? styles.rowGroup : styles.columnGroup}
              >
                {group.map((question, idx) => (
                  <div
                    key={question.id}
                    className={isRow ? styles.rowItem : undefined}
                  >
                    <label className={styles.label}>{question.label}</label>
                    {question.type === "text" && (
                      <input
                        type="text"
                        className={styles.text}
                        value={formValues[question.id]}
                        onChange={(e) =>
                          handleChange(question.id, e.target.value)
                        }
                      />
                    )}

                    {question.type === "select" && (
                      <select
                        className={styles.select}
                        value={formValues[question.id] || ""}
                        onChange={(e) =>
                          handleChange(question.id, e.target.value)
                        }
                      >
                        <option value="" disabled>
                          Select
                        </option>

                        {question.options.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {question.type === "email" && (
                      <input
                        type="email"
                        className={styles.email}
                        value={formValues[question.id]}
                        onChange={(e) =>
                          handleChange(question.id, e.target.value)
                        }
                        required
                      />
                    )}

                    {question.type === "date" && (
                      <input
                        type="date"
                        className={styles.date}
                        value={formValues[question.id]}
                        onChange={(e) =>
                          handleChange(question.id, e.target.value)
                        }
                        required
                      />
                    )}

                    {question.type === "multiselect" && (
                      <select
                        multiple
                        className={styles.multiselect}
                        value={formValues[question.id] || []}
                        onChange={(e) =>
                          handleChange(
                            question.id,
                            Array.from(
                              e.target.selectedOptions,
                              (option) => option.value
                            )
                          )
                        }
                        required
                      >
                        {question.options.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {question.type === "textarea" && (
                      <textarea
                        className={styles.textarea}
                        value={formValues[question.id] || ""}
                        onChange={(e) =>
                          handleChange(question.id, e.target.value)
                        }
                        rows={4}
                        placeholder="Type your response here..."
                      />
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </form>
        <div className={styles.footer}>
          <button
            type="button"
            className={styles.next}
            onClick={() => setQuestionIndex(firstSectionQuestions.length)}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );

  const renderOtherQuestions = (
    <>
      <QuizBar currentQuestion={progressQuestionNumber} />
      <QuizTitle title={currentQuestion.sectionTitle} />
      <div className={styles.label}>{currentQuestion.label}</div>

      <Question2 formValues={formValues} setFormValues={setFormValues} />
      <Nav
        index={questionIndex}
        setIndex={setQuestionIndex}
        total={allQuestions.length}
      />
    </>
  );

  return <>{isInFirstSection ? renderFirstSection : renderOtherQuestions}</>;
}

export default Quiz;
// email, date, multiselect, textarea
