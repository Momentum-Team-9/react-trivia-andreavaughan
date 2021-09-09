import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Categories } from './Categories'

export const Settings = () => {
    const [ selectedCategory, setSelectedCategory ] = useState(null)
    const [ questions, setQuestions ] = useState([])

    useEffect(() => {
        if (selectedCategory !== null && questions.length === 0) {
            console.log('it runs!')
            console.log(selectedCategory)
            axios.get(
                `https://opentdb.com/api.php?amount=10&category=${selectedCategory}`
            )
            .then((response) => {
                setQuestions(response.data.results)
            })
        }
    })

    console.log(questions)

    return (
        <>
            <Categories setSelectedCategory={setSelectedCategory}/>
        </>
    )
}