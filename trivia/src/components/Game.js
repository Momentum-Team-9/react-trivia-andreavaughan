import React, { useState } from 'react'
import { Settings } from './Settings'
import { QuestionsList } from './QuestionsList'


export const Game = () => {
    const [ questions, setQuestions ] = useState([])

    return (
        <div>
            { questions.length === 0 ? 
            <Settings questions={questions} setQuestions={setQuestions} /> :
            <QuestionsList questions={questions} setQuestions={setQuestions} /> }
        </div>
    )
}