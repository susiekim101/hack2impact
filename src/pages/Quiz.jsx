import QuizBar from '../components/quizBar';
import QuizTitle from '../components/quizTitle';

function Quiz() {
    return (
        <>
        <QuizBar currentQuestion={3} />
        <QuizTitle title="Color Preferences"/>
        </>
    );
}

export default Quiz;