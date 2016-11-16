import React from 'react';
import ReactDOM from 'react-dom';

class HelloVisitor extends React.Component {

    /**
     * Set initial state and bind this for handleName function
     */
    constructor(props) {

        super(props);

        this.state = {
            visitorName: 'Visitor!'
        };

        this.handleName = this.handleName.bind(this);

    }

    /**
     * Handle the change event of our input field
     */
    handleName(event) {

        this.setState({
            visitorName: event.target.value
        });

    }

    /**
     * Render our card with "Hello <visitor>" and input field
     */
    render() {

        return (

            <div className="card">

                <div className="card-block text-xs-center">

                    <h4>Hello {this.state.visitorName}</h4>

                </div>

                <div className="card-block">

                    <input type="text" className="form-control" placeholder="John Doe" onChange={this.handleName} />
                    <p className="form-text text-muted mb-0">Type your name above to see it written back to you in real-time.</p>

                </div>

            </div>

        );

    }

}

function App() {

    return (

        <div className="container pt-2">

            <div className="row">

                <div className="col-sm-6">

                    <HelloVisitor />

                </div>

            </div>

        </div>

    );

}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
