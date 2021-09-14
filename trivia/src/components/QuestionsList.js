import React, { useState, useEffect } from 'react'
import { Score } from './Score'
import { QuestionCounter } from './QuestionCounter'
import '../styles/questions-list.css'


export const QuestionsList = ({ questions, setQuestions }) => {
    const [ isCorrect, setIsCorrect ] = useState(false)
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ score, setScore ] = useState(0)
    const [ checkedAnswer, setCheckedAnswer ] = useState('')

    useEffect(() => {
        setIsCorrect(false)
        setCheckedAnswer('')
    }, [currentIndex])

    useEffect(() => {
        if ( questions[currentIndex] !== undefined
            && checkedAnswer === questions[currentIndex].answer) {
            setIsCorrect(true)
        }
    }, [checkedAnswer])

    return (
        <>
            { questions[currentIndex] !== undefined 
                ? <>
                    <div className="card" key={questions[currentIndex].id}>
                        <h4 className="card-title">{questions[currentIndex].question}</h4>
                        { checkedAnswer === '' ? 
                            <div className="d-grid gap-2 col-6 mx-auto">
                                {questions[currentIndex].options.map((option, i) => (
                                    <button
                                    onClick={() => (setCheckedAnswer(option))}
                                    key={i}
                                    className="btn btn-primary"
                                    type="button">
                                        {option}
                                    </button>
                                ))}
                            </div> :
                            <div className={isCorrect ? 'correct' : 'incorrect'}>
                                <h5>The correct answer is: </h5>
                                <h3>{questions[currentIndex].answer}</h3>
                                <h5>You answered: {checkedAnswer}</h5>
                                <button
                                onClick={() => (setCurrentIndex(currentIndex + 1))}
                                className={isCorrect ? 'btn btn-success' : 'btn btn-danger'}>
                                    Next Question
                                </button>
                            </div>
                        }
                    </div>
                    <div className="question-nums">
                        <QuestionCounter questions={questions} currentIndex={currentIndex}/>
                        <Score isCorrect={isCorrect} score={score} setScore={setScore}/>
                    </div>
                </> 
                : <>
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