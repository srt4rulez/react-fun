import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Write a program that prints the numbers from 1 to 100. But for multiples of
 * three print “Fizz” instead of the number and for the multiples of five print
 * “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
 */
class FizzBuzz extends React.Component {

    /**
     * Set our initial state, and bind our handle functions
     */
    constructor(props) {

        super(props);

        this.state = {
            number:        0,
            displayNumber: 0
        };

        this.handleAdd   = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this);

    }

    /**
     * Update the number and displayNumber states, adding one to our number
     */
    handleAdd() {

        if (this.state.number >= 100) {
            return;
        }

        this.setState((prevState) => this.getNewFizzBuzzState(prevState.number, 'add'));

    }

    /**
     * Update the number and displayNumber states, subtracting one to our number
     */
    handleMinus() {

        if (this.state.number <= 1) {
            return;
        }

        this.setState((prevState) => this.getNewFizzBuzzState(prevState.number, 'subtract'));

    }

    /**
     * Return our new state object
     */
    getNewFizzBuzzState(prevStateNumber, action) {

        let newNumber;

        if (action === 'add') {
            newNumber = prevStateNumber + 1;
        } else {
            newNumber = prevStateNumber - 1;
        }

        let newDisplayNumber = this.getDisplayNumber(newNumber);

        return {
            number:        newNumber,
            displayNumber: newDisplayNumber
        };

    }

    /**
     * Get the displayed "number" (eg, number might actually be "Fizz" and/or "Buzz")
     */
    getDisplayNumber(number) {

        let displayNumber = '';

        if (number % 3 === 0) { // multiple of 3
            displayNumber += 'Fizz';
        }

        if (number % 5 === 0) { // multiple of 5
            displayNumber += 'Buzz';
        }

        // If displayNumber has a value, return the string
        if (displayNumber) {
            return displayNumber;
        }

        // else, just return the number
        return number;

    }

    /**
     * Render the markup for our FizzBuzz component
     */
    render() {

        return (

            <div className="card card-block text-xs-center">

                <h4 className="card-title">{this.state.displayNumber} ({this.state.number})</h4>

                <div className="btn-group">

                    <button type="button" className="btn btn-secondary" onClick={this.handleAdd}>Add One</button>
                    <button type="button" className="btn btn-secondary" onClick={this.handleMinus}>Minus One</button>

                </div>

            </div>


        );

    }

}

/**
 * This function doesn't need to extend React.Component
 */
function App() {

    return (

        <div className="container pt-2">

            <FizzBuzz />

        </div>

    );

}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
