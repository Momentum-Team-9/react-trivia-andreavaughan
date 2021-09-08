import React from 'react';

export const Settings = () => {

    return (
        <>
            <h3>Select a difficulty and category. Once selected, click 'start' to begin.</h3>
            <div>
                <h4>Difficulty</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="difficulty-select" id="easy-radio" />
                    <label className="form-check-label" for="easy-radio">
                        Easy
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="difficulty-select" id="medium-radio" />
                    <label className="form-check-label" for="medium-radio">
                        Medium
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="difficulty-select" id="hard-radio" />
                    <label className="form-check-label" for="hard-radio">
                        Hard
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="difficulty-select" id="random-radio" />
                    <label className="form-check-label" for="random-radio">
                        Random
                    </label>
                </div>
                <h4>Category</h4>
                <select className="form-select" aria-label="Category select">
                    <option>Select dropdown</option>
                    <option>With options</option>
                    <option>With more</option>
                </select>
            </div>
            <button type="button" className="btn btn-danger btn-lg">Start</button>
        </>
    )
}