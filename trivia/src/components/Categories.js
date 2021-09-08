import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Categories = ({ setSelectedCategory }) => {
    const [ categories, setCategories ] = useState([])
    
    useEffect(() => {
        axios
            .get(
                `https://opentdb.com/api_category.php`
            )
            .then((response)  => {
                setCategories(response.data.trivia_categories)
            })
    }, [])

    return (
        <>
            <div className="categories">
                <h4>Select a Category</h4>
                { categories.map((category) => (
                    <button onClick={() => (setSelectedCategory(category.id))} className="btn btn-outline-primary" id={category.id}>{category.name}</button>
                ))}
            </div>
        </>
    )
}