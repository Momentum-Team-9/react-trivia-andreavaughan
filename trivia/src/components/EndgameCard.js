import React from 'react';
import '../styles/endgame.css'

export const EndgameCard = ({ score, setQuestions }) => {

    return (
        <div className="endgame">
            <h3>You got {score} right!</h3>
            <button 
            className="btn btn-success" 
            onClick={() => (setQuestions([]))}
            >
                Play Again
            </button>
        </div>
    );
}

