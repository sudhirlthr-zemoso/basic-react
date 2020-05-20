function tick() {
    return(
        const element = (
                <div>
                    <h2>Hello World</h2>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </div>
            );
            ReactDOM.render(element, document.getElementById('root'));
    );
}

export default Time;