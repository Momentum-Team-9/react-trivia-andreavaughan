import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Categories } from './Categories'

export const Settings = () => {
    const [ selectedCategory, setSelectedCategory ] = useState(null)

    console.log(selectedCategory)    

    useEffect(() => {
        if (selectedCategory != null) {
            console.log('it runs!')
            axios.get(
                `https://opentdb.com/api.php?amount=10&category=${selectedCategory}`
            )
            .then((response) => {
                console.log(response)
            })
        }
    })

    return (
        <>
            <Categories setSelectedCategory={setSelectedCategory}/>
        </>
    )
}