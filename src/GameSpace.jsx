import PropTypes from 'prop-types';
import('./GameSpace.css')

export default function GameSpace({ dice }) {
    return (
        <div className="game-space">
            <h1>dice appear here</h1>
        </div>

    )
}

GameSpace.propTypes = {
    dice: PropTypes.arrayOf(
        PropTypes.shape({
            dieKey: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            kept: PropTypes.bool.isRequired
        })
    ).isRequired,
};