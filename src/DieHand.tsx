import Die from "./Die";
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

export default function DieHand({dice}) {

    return (

        <div className="dieHand">
            {dice.map((d) => <Die key={uuid()} dieKey={d.dieKey} dieValue={d.value} />)}

        </div>
    )
}

DieHand.propTypes = {
    dice: PropTypes.arrayOf(
        PropTypes.shape({
            dieKey: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            kept: PropTypes.bool.isRequired
        })
    ).isRequired,
};