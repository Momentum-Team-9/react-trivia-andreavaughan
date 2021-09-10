import React, { useState } from 'react'
import { Settings } from './Settings'
import { Questions } from './Questions'


export const Game = () => {
    const [ questions, setQuestions ] = useState([])

    return (
        <div>
            { questions.length === 0 ? 
            <Settings questions={questions} setQuestions={setQuestions} /> :
            <Questions questions={questions} /> }
        </div>
    )
}