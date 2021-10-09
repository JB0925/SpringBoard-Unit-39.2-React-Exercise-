const Tweet = props => {
    const { username, name, date, message } = props;
    return (
        <div>
            <h1>Here's Your Tweet!</h1>
            <p>Username: {username}</p>
            <p>Name: {name}</p>
            <p>Date: {date}</p>
            <p>Message: {message}</p>
        </div>
    );
};

ReactDOM.render(<Tweet />, document.getElementById("root"));