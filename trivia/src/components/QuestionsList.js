import React, { useState, useEffect } from 'react'
import { Question } from './Question'
import { Score } from './Score'
import { QuestionCounter } from './QuestionCounter'
import '../styles/questions-list.css'


export const QuestionsList = ({ questions, setQuestions }) => {
    const [ isCorrect, setIsCorrect ] = useState(false)
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ score, setScore ] = useState(0)

    useEffect(() => {
        setIsCorrect(false)
    }, [currentIndex])

    return (
        <>
            { questions[currentIndex] !== undefined ?
                <>
                    <Question 
                        question={questions[currentIndex]} 
                        key={questions[currentIndex].id} 
                        isCorrect={isCorrect}
                        setIsCorrect={setIsCorrect}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                    <div className="question-nums">
                        <QuestionCounter questions={questions} currentIndex={currentIndex}/>
                        <Score isCorrect={isCorrect} score={score} setScore={setScore}/>
                    </div>
                </> :
                <>
                    <div className="endgame">
                        <h3>You got {score} right!</h3>
                        <button 
                        className="btn btn-success" 
                        onClick={() => (setQuestions([]))}
                        >
                            Play Again
                        </button>
                    </div>
                </>
            }
        </>
    )
}