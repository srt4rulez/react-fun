import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
            <h1 className="display-1">Hello World!</h1>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
