import React, { useState, useEffect } from 'react'
import { Question } from './Question'
import { Score } from './Score'


export const QuestionsList = ({ questions }) => {
    const [ isCorrect, setIsCorrect ] = useState(false)


    return (
        <>
            <Score isCorrect={isCorrect}/>
            {questions.map((question) => (
                <Question 
                question={question} 
                key={question.id} 
                isCorrect={isCorrect}
                setIsCorrect={setIsCorrect}
                />
                )
            )}
        </>
    )
}