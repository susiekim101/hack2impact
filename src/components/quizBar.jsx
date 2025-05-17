import '../css/QuizBar.css';

const QuizBar = ({currentQuestion}) => {
    const totalQuestions = 15;
    const circles = [];

    for(let i = 0; i < totalQuestions; i++) {
        const isActive = i < currentQuestion;
        circles.push(
            <div key={i} className={ isActive ? "completed" : "remaining"}/>
        )
    }
    return (
        <>
        <div className="row">
            {circles}
        </div>
        </>

    );
}

export default QuizBar;