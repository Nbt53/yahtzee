export function drawScoreBoard(section, keyMethod) {
    return section.map((s) => (
        <div key={keyMethod()} className='single-total'>
            <span className='single-score'>{s}</span>
            <div className="score-container">
                <div className="score">10</div>
            </div>
        </div>
    ));
}

export function createDice(keyMethod, func, initDieValue) {
    return [{ dieKey: keyMethod, value: initDieValue, kept: true },
    { dieKey: keyMethod, value: func(), kept: true },
    { dieKey: keyMethod, value: func(), kept: true },
    { dieKey: keyMethod, value: func(), kept: true },
    { dieKey: keyMethod, value: func(), kept: true }]
}

export function createPlayer(arr1, arr2) {
    const playerObject = {};

    arr1.forEach((h) => {
        playerObject[h] = 0;
    });

    arr2.forEach((h) => {
        playerObject[h] = 0;
    });

    return playerObject;
}

export function totalValue(dice) {
    let totalValue = 0
    dice.map((e) => {
        return totalValue = totalValue + e.value
    })
    return totalValue
}

export function calculateScores(currentHand, totalValue, dice, setCurrentHand) {
    const updatedScores = { ...currentHand };

    for (const key in updatedScores) {
        if (key === 'total') {
            updatedScores[key] = totalValue(dice);
        }
    }

    setCurrentHand(updatedScores);

}