import React, { useState, useEffect } from 'react';

export const QuestionCounter = ({ questions, currentIndex }) => {
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ totalQuestions ] = useState(questions.length)

    useEffect(() => {
        setCurrentQuestion(currentQuestion + 1)
    }, [currentIndex])   

    return (
        <div>
            <p>Question {currentQuestion} of {totalQuestions}</p>
        </div>
    );
}
