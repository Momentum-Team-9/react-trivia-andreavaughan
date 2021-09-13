import React from 'react';

export const EndgameCard = ({ score, setQuestions }) => {

    return (
        <div>
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

