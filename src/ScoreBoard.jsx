import PlayerScore from './PlayerScore'

import('./ScoreBoard.css')

export default function ScoreBoard() {

    return (
        <div className="score-board">
          <PlayerScore />
          <PlayerScore />
        </div>
    )
}