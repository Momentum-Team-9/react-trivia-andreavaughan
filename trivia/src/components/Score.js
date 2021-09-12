import React, { useState, useEffect } from 'react';

export const Score = ({ isCorrect }) => {
    const [ score, setScore ] = useState(0)

    useEffect(() => {
        if (isCorrect === true) {
            setScore(score + 1)
        }
    }, [isCorrect])

    return (
        <div>
            <p>Score</p>
            <p>{score}</p>
        </div>
    );
}

