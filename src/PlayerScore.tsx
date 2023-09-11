import('./PlayerScore.css')
import { v4 as uuid } from 'uuid';
import { drawScoreBoard } from './jsxFunction';
import { hands, single } from './jsxVariables';

export default function PlayerScore() {
    single
    hands
    return (
        <div className="player-score">
            <h3>Player 1</h3>

            <div className="single-totals">
                {drawScoreBoard(single, uuid)}
            </div>

            <div className="hand-totals">
                {drawScoreBoard(hands, uuid)}
            </div>
        </div>
    )
}