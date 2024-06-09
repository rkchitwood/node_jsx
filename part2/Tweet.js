function Tweet({ username, name, date, message }){
    return(
        <div>
            <span>{username}</span>
            <span>{name}</span>
            <span>{date}</span>
            <p>{message}</p>
        </div>
    );
}