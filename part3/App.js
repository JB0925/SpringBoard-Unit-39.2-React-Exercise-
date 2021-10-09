const App = () => {
    return (
        <div>
            <Person name="Alejandro" age={21} hobbies={['biking', 'fishing', 'swimming']}/>
            <Person name="Mike" age={17} hobbies={['guitar', 'snowboarding', 'cooking']}/>
            <Person name="Jason" age={25} hobbies={['eating', 'drinking', 'jumping']}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));