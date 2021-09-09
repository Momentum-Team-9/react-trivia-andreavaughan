import React from 'react'
import { Answers } from './Answers'

export const Questions = ({ questions }) => {
    console.log(questions)

    

    return (
        <>
            {questions.map((question, idx) => (
                <div className="card" key={idx}>
                    <div className="card-body">
                        <h4 className="card-title">{question.question}</h4>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button">{question.correct_answer}</button>
                            <button className="btn btn-primary" type="button">{question.incorrect_answers}</button>
                        </div>
                    </div>
                </div>
                )
            )}
        </>
    )
}