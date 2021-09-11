import React, { useState, useEffect } from 'react'


export const Question = ({ question }) => {
    const [ checkedAnswer, setCheckedAnswer ] = useState('')
    const [ isCorrect, setIsCorrect ] = useState(false)  

    useEffect(() => {
        if (checkedAnswer === question.answer) {
            console.log('your answer is correct')
            setIsCorrect(!isCorrect)
        }

    }, [checkedAnswer])

    console.log(isCorrect)

    console.log(question.options)

    return (
        <div>
            <div className="card" key={question.id}>
                    <div className="card-body">
                        <h4 className="card-title">{question.question}</h4>
                        { checkedAnswer === '' ? 
                            <div className="d-grid gap-2">
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
                            <div className="d-grid gap-2">
                                <h3>The correct answer is: </h3>
                                <p>{question.answer}</p>
                                <h3>You answered: </h3>
                                <p>{checkedAnswer}</p>
                            </div>
                        }
                    </div>
                </div>
        </div>
    );
}

