import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Settings = () => {
    const [ categories, setCategories ] = useState([])
    
    useEffect(() => {
        axios
            .get(
                `https://opentdb.com/api_category.php`
            )
            .then((response)  => {
                setCategories(response.data.trivia_categories.map((category) => [category.name, category.id]))
            })
    }, [])

    console.log(categories)

    return (
        <>
            <form>
                <h3>Select a difficulty and category. Once selected, click 'start' to begin.</h3>
                <div>
                    <h4>Difficulty</h4>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="difficulty-select" id="easy-radio" />
                        <label className="form-check-label" htmlFor="easy-radio">
                            Easy
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="difficulty-select" id="medium-radio" />
                        <label className="form-check-label" htmlFor="medium-radio">
                            Medium
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="difficulty-select" id="hard-radio" />
                        <label className="form-check-label" htmlFor="hard-radio">
                            Hard
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="difficulty-select" id="random-radio" />
                        <label className="form-check-label" htmlFor="random-radio">
                            Random
                        </label>
                    </div>
                    <h4>Category</h4>
                    <select className="form-select categories" aria-label="Category select">
                            <option className="category" id="">Any Category</option>
                        { categories.map((category) => (
                            <option className="category" id={category[1]}>{category[0]}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-danger btn-lg">Start</button>
            </form>
        </>
    )
}