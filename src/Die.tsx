export default function Die({dieKey, dieValue}) {
    return (
        <>
            <div key={dieKey} className="dice">{dieValue}</div>
        </>
    )
}



