const App = () => {
    return (
        <div>
            <Tweet username="funGuy123" name="Mark" date="10-8-2021" message="My first tweet" />
            <Tweet username="happyPerson456" name="Tim" date="10-4-2021" message="I'm so happy!" />
            <Tweet username="superPotato789" name="Sarah" date="10-15-2021" message="I like potatoes." />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));