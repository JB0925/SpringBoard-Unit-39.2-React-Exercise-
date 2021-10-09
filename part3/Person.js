const Person = props => {
    const { name, age, hobbies} = props;
    const displayMsg = age < 18 ? "You must be 18." : "Please go vote!";
    const displayName = name.length > 6 ? name.slice(0,6) : name;
    const hobbyLis = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person:</p>
            <h3>{displayName}</h3>
            <h3>{displayMsg}</h3>
            <ul>{hobbyLis}</ul>
        </div>
    );
};

ReactDOM.render(<Person />, document.getElementById("root"));