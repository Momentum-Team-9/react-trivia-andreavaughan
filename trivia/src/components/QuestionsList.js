import React, { useState, useEffect } from 'react'
import { Question } from './Question'

export const QuestionsList = ({ questions }) => {
    
    return (
        <>
            {questions.map((question) => (
                <Question question={question} key={question.id}/>
                )
            )}
        </>
    )
}