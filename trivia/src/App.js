import React from 'react'
import { Game } from './components/Game'
import './styles/app.css'


export const App = () => {
    
    return (
        <div className="gameboard">
            <h1>Trivia</h1>
            <div>
                <Game />
            </div>
        </div>
    )
}