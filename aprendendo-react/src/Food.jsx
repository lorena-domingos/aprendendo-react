
function Food() {
    const food1 = "Feijão"
    const food2 = "Arroz"

    return (
        <ul>
            <li>Farofa</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()} Fresquinho</li>
        </ul>
    );
}

export default Food