import { useState } from "react";
import QuizBar from "../components/QuizBar.jsx";
import QuizTitle from "../components/QuizTitle.jsx";
import quizQuestions from "../utils/quizQuestions.js";
import styles from "../css/Quiz.module.css";
import Nav from "../components/NavigationButton.jsx";

import Question2 from "../components/questions/Question2.jsx";
import Question3 from "../components/questions/Question3.jsx";
import Question4 from "../components/questions/Question4.jsx";
<<<<<<< HEAD
import Question5 from "../components/questions/Question5.jsx";
import Question6 from "../components/questions/Question6.jsx";
import Question7 from "../components/questions/Question7.jsx";
import Question8 from "../components/questions/Question8.jsx";
import Question9 from "../components/questions/Question9.jsx";

export const questionComponents = {
  colorPalettes: Question2,
  textures: Question3,
  scentsLike: Question4,
  scentsDislike: Question5,
  allergies: Question6,
  sensoryTriggers: Question7,
  layoutSafety: Question8,
  controlOfSpace: Question9,
};
=======
import Nav from "../components/NavigationButton.jsx";
>>>>>>> a27f3bd986468e7ff76e08d81952660ecf3847b5

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

  const renderOtherQuestions = (() => {
    const QuestionComponent = questionComponents[currentQuestion.id];

    return (
      <>
        <QuizBar currentQuestion={progressQuestionNumber} />
        <QuizTitle title={currentQuestion.sectionTitle} />
        <div className={styles.label}>{currentQuestion.label}</div>
        {QuestionComponent ? (
          <QuestionComponent
            formValues={formValues}
            setFormValues={setFormValues}
          />
        ) : (
          <div>Missing component for {currentQuestion.id}</div>
        )}
        <Nav
          index={questionIndex}
          setIndex={setQuestionIndex}
          total={allQuestions.length}
        />
      </>
    );
  })();

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

  return <>{isInFirstSection ? renderFirstSection : renderOtherQuestions}</>;
}

export default Quiz;
