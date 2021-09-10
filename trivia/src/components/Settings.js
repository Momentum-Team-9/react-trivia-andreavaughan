import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Categories } from './Categories'

export const Settings = ({ questions, setQuestions }) => {
    const [ selectedCategory, setSelectedCategory ] = useState(null)

    useEffect(() => {
        if (selectedCategory !== null && questions.length === 0) {
            console.log('it runs!')
            console.log(selectedCategory)
            axios.get(
                `https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=easy&type=multiple`
            )
            .then((response) => {
                setQuestions(response.data.results.map((question, index) => {
                    const answer = (question.correct_answer)
                    const options = [...question.incorrect_answers, answer]
                    return {
                        id: `${index}`, 
                        question: question.question,
                        answer: answer,
                        options: options.sort(() => Math.random() - 0.5)
                    }
                }))
            })
        }
    })

    return (
        <>
            <Categories setSelectedCategory={setSelectedCategory}/>
        </>
    )
}