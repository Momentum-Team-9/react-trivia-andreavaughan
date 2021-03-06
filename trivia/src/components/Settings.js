import React, { useState, useEffect } from 'react'
import axios from 'axios'
import he from 'he'
import { Categories } from './Categories'

export const Settings = ({ questions, setQuestions }) => {
    const [ selectedCategory, setSelectedCategory ] = useState(null)

    useEffect(() => {
        if (selectedCategory !== null && questions.length === 0) {
            axios.get(
                `https://opentdb.com/api.php?amount=10&category=${selectedCategory}`
            )
            .then((response) => {
                setQuestions(response.data.results.map((question, index) => {
                    const answer = he.decode(question.correct_answer)
                    const options = [...question.incorrect_answers.map( item => he.decode(item)), answer]
                    return {
                        id: `${index}`, 
                        question: he.decode(question.question),
                        answer: answer,
                        options: options.sort(() => Math.random() - 0.5)
                    }
                }))
            })
        }
    }, [selectedCategory])

    return (
        <>
            <Categories setSelectedCategory={setSelectedCategory}/>
        </>
    )
}