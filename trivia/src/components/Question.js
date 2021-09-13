import React, { useState, useEffect } from 'react'
import '../styles/question.css'


export const Question = ({ question, isCorrect, setIsCorrect, currentIndex, setCurrentIndex }) => {
    const [ checkedAnswer, setCheckedAnswer ] = useState('')

    useEffect(() => {
        if (checkedAnswer === question.answer) {
            console.log('your answer is correct')
            setIsCorrect(true)
        }
    }, [checkedAnswer])

    return (
        <div>
            <div className="card" key={question.id}>
                    <div className="card-body">
                        <h4 className="card-title">{question.question}</h4>
                        { checkedAnswer === '' ? 
                            <div className="d-grid gap-2 col-6 mx-auto">
                                {question.options.map((option, i) => (
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
                                <h3>The correct answer is: </h3>
                                <p>{question.answer}</p>
                                <h3>You answered: </h3>
                                <p>{checkedAnswer}</p>
                                <button
                                onClick={() => (setCurrentIndex(currentIndex + 1))}
                                className="btn btn-danger">
                                    Next Question
                                </button>
                            </div>
                        }
                    </div>
                </div>
        </div>
    );
}

