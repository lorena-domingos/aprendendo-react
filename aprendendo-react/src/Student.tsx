type StudentProps = {
    name?: string,
    age?: number,
    isStudent?: boolean
};

function Student({name = 'Guest', age = 0, isStudent = false} : StudentProps) {
    return(
        <div style={{ margin: "10px", padding: "10px"}}>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Estudante: {isStudent ? "Sim" : "Não"}</p>
        </div>
    );
}

export default Student