const MAX_NAME_LEN = 6

function Person({ name, age, hobbies }){
    const voteOrStudy = age >= 18 ? "Go vote!" : "Go study!";
    return(
        <div>
            <p>Learn some information about this person</p>
            <h2>{name.slice(0, MAX_NAME_LEN)}</h2>
            <h3>{voteOrStudy}</h3>
            <ul>hobbies
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
}