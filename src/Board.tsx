import DieHand from "./DieHand";
import("./Board.css")
import { v4 as uuid } from 'uuid';
import { roll } from "./functions";
import { useEffect, useState } from "react";
import GameSpace from "./GameSpace";
import ScoreBoard from "./ScoreBoard";
import { calculateScores, createDice, createPlayer, totalValue } from "./jsxFunction";
import { hands, single } from "./jsxVariables";

export default function Board() {
    const [playerOne, setPlayerOne] = useState(createPlayer(single, hands))
    const [playerTwo, setPlayerTwo] = useState(createPlayer(single, hands))
    const [playerTurn, setPlayerTurn] = useState(1)
    const [currentHand, setCurrentHand] = useState(createPlayer(single, hands))
    const [dieValue, setDieValue] = useState(roll)
    const reRoll = () => setDieValue(roll)
    const dice = createDice(uuid, roll, dieValue)
    ///////////////
    const singleScore = (currentHand, value) => {
        let score = 0
        for (let i = 0; i < currentHand.length; i++) {
            if (currentHand[i].value === value) {
                console.log('here')
                score = score + value
            }
        }
        setCurrentHand((newHand) => {
            return { ...newHand, [value]: value };
        })

    }
    useEffect(() => {
        singleScore(dice, 1);
    }, []);

    console.log(currentHand)

    ///////////////

    return (
        <div className="board">
            <div className="board-left">
                <div className="game-space-container"><GameSpace dice={dice} /></div>
                <div className="currentHand"><DieHand dice={dice} />
                    <button onClick={reRoll}>roll</button></div>
            </div>
            <div className="score-board-container"><ScoreBoard /></div>
            <button onClick={() => calculateScores(currentHand, totalValue, dice, setCurrentHand)}></button>
        </div>

    )
}