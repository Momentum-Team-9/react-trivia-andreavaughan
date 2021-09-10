import React from 'react'

export const Questions = ({ questions }) => {
    console.log(questions)



    return (
        <>
            {questions.map((question) => (
                <div className="card" key={question.id}>
                    <div className="card-body">
                        <h4 className="card-title">{question.question}</h4>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button">{question.options}</button>
                        </div>
                    </div>
                </div>
                )
            )}
        </>
    )
}