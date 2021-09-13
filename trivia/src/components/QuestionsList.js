import React, { useState, useEffect } from 'react'
import { Question } from './Question'
import { Score } from './Score'
import { EndgameCard } from './EndgameCard'
import { QuestionCounter } from './QuestionCounter'


export const QuestionsList = ({ questions }) => {
    const [ isCorrect, setIsCorrect ] = useState(false)
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ score, setScore ] = useState(0)

    useEffect(() => {
        setIsCorrect(false)
    }, [currentIndex])

    return (
        <>
            { questions[currentIndex] !== undefined ?
                <Question 
                    question={questions[currentIndex]} 
                    key={questions[currentIndex].id} 
                    isCorrect={isCorrect}
                    setIsCorrect={setIsCorrect}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                /> :
                <EndgameCard score={score}/>
            }
            {questions[currentIndex] !== undefined ? 
                <QuestionCounter /> :
                <div></div> 
            }
            { questions[currentIndex] !== undefined ? 
                <Score isCorrect={isCorrect} score={score} setScore={setScore}/> :
                <div></div>
            }
        </>
    )
}