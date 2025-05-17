const RenderQuestions = () => {

    return (
        <> 
        {currentQuestion.type === "text" && (
            <input 
              type="text" 
              className={styles.text}
              value={formValues[currentQuestion.id]}
              onChange={(e) => handleChange(currentQuestion.id, e.target.value)}  
              />
          )}
  
          {currentQuestion.type === "select" && (
            <select 
              className={styles.select}
              value={formValues[currentQuestion.id] || ""}
              onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
            >
            <option value="" disabled>Select</option>
  
            {currentQuestion.options.map((option, idx) => (
              <option key={idx} value={option}> {option}</option>
            ))}
            </select>
          )}
  
          {currentQuestion.type === "email" && (
            <input
              type="email"
              className={styles.email}
              value={formValues[currentQuestion.id]}
              onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
              required
            />
          )}
  
          {currentQuestion.type === "date" && (
            <input 
              type="date"
              className={styles.date}
              value={formValues[currentQuestion.id]}
              onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
              required
            />
           )}
  
          {currentQuestion.type === "multiselect" && (
            <select
              multiple
              className={styles.multiselect}
              value={formValues[currentQuestion.id] || []}
              onChange={(e) => handleChange(
                currentQuestion.id, 
                Array.from(e.target.selectedOptions, (option) => option.value))}
              required
            >
            {currentQuestion.options.map((option, idx) => (
              <option key={idx} value={option}>{option}</option>))}
                </select>
            )}
  
            {currentQuestion.type === "textarea" && (
              <textarea 
                className={styles.textarea}
                value={formValues[currentQuestion.id] || ""}
                onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                rows={4}
                placeholder="Type your response here..."
              />
            )}
        </>
    )
}
export default RenderQuestions