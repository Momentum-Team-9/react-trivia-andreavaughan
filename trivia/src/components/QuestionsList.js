import React, { useState, useEffect } from 'react'
import { Question } from './Question'
import { Score } from './Score'
import { EndgameCard } from './EndgameCard'


export const QuestionsList = ({ questions }) => {
    const [ isCorrect, setIsCorrect ] = useState(false)
    const [ currentIndex, setCurrentIndex ] = useState(0)

    useEffect(() => {
        setIsCorrect(false)
    }, [currentIndex])

    console.log(questions[currentIndex])

    return (
        <>
            <Score isCorrect={isCorrect}/>
            { questions[currentIndex] !== undefined ?
                <Question 
                    question={questions[currentIndex]} 
                    key={questions[currentIndex].id} 
                    setIsCorrect={setIsCorrect}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                /> :
                <EndgameCard />
            }
        </>
    )
}