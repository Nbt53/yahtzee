import('./die.css')
import PropTypes from 'prop-types';

export default function Die({dieKey, dieValue}) {
    return (
        <>
            <div key={dieKey} className="dice">{dieValue}</div>
        </>
    )
}


Die.propTypes = {
        dieKey: PropTypes.string.isRequired,
        dieValue: PropTypes.number
      };
