import React from 'react'

export const Questions = ({ questions }) => {
    console.log(questions)

    return (
        <div>
            <form>
                <h3>Question</h3>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="difficulty-select" id="question-radio-1" />
                    <label className="form-check-label" htmlFor="question-radio-1">
                        Answer 1
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="difficulty-select" id="question-radio-2" />
                    <label className="form-check-label" htmlFor="question-radio-2">
                        Answer 2
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="difficulty-select" id="question-radio-3" />
                    <label className="form-check-label" htmlFor="question-radio-3">
                        Answer 3 
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="difficulty-select" id="question-radio-4" />
                    <label className="form-check-label" htmlFor="question-radio-4">
                        Answer 4 
                    </label>
                </div>
            </form>
        </div>
    )
}