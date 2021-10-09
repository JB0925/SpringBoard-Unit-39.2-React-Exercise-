const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Jesse" />
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));