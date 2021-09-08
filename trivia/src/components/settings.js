import React, { useState, useEffect } from 'react'
import { Categories } from './Categories'

export const Settings = () => {
    const [ selectedCategory, setSelectedCategory ] = useState(null)

    console.log(selectedCategory)    

    return (
        <>
            <Categories setSelectedCategory={setSelectedCategory}/>
        </>
    )
}