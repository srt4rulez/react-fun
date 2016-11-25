import React from 'react';
import ReactDOM from 'react-dom';

/**
 * The ToDoForm component is responsible for our form markup, and lets its props
 * do the heavy lifting
 */
class ToDoForm extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (

            <form className="input-group" onSubmit={this.props.addToDoItem}>

                <input type="text" className="form-control" placeholder="Todo Item..." ref={this.props.toDoInputRef} onChange={this.props.handleToDoInputChange} />

                <span className="input-group-btn">

                    <button type="submit" className="btn btn-secondary" disabled={this.props.submitButtonDisabledState}>Add ToDo</button>

                </span>

            </form>

        );

    }

}

ToDoForm.propTypes = {
    addToDoItem:               React.PropTypes.func,
    handleToDoInputChange:     React.PropTypes.func,
    toDoInputRef:              React.PropTypes.func,
    submitButtonDisabledState: React.PropTypes.bool
};

/**
 * The ToDoList is the main compontent in our ToDo app.
 *
 * It holds the state for our todo items, and the submit button state.
 *
 * It also handles when our todo input changes, or when the form is submitted.
 */
class ToDoList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items:            ['Pick up dry cleaning', 'Do homework'],
            isSubmitDisabled: true
        };

        this.handleFormSubmit      = this.handleFormSubmit.bind(this);
        this.setToDoInput          = this.setToDoInput.bind(this);
        this.handleToDoInputChange = this.handleToDoInputChange.bind(this);

    }

    /**
     * Determine the disabled state of our submit button, depending on input value
     */
    handleToDoInputChange(event) {

        let inputValue = event.target.value,
            disabled   = true;

        if (inputValue) {
            disabled = false;
        }

        this.setState({
            isSubmitDisabled: disabled
        });

    }

    /**
     * Set the todo input for use in this component
     */
    setToDoInput(input) {
        this.input = input;
    }

    /**
     * Add a new todo item to our items state
     */
    handleFormSubmit(event) {

        event.preventDefault();

        if (!this.input.value) {
            alert('Looks like you forgot to write something!');
            this.input.focus();
            return;
        }

        let newItems = this.state.items;

        newItems.push(this.input.value);

        this.setState({
            items:            newItems,
            isSubmitDisabled: true
        });

        this.input.value = '';
        this.input.focus();

    }

    /**
     * List out our todo items
     */
    listToDoItems() {

        let list = this.state.items.map(function(item, index) {

            return (
                <li key={index} className="list-group-item">{item}</li>
            );

        });

        return list;

    }

    render() {

        return (

            <div className="card">

                <ul className="list-group list-group-flush">

                    {this.listToDoItems()}

                </ul>

                <div className="card-block">

                    <ToDoForm
                        addToDoItem={this.handleFormSubmit}
                        toDoInputRef={this.setToDoInput}
                        handleToDoInputChange={this.handleToDoInputChange}
                        submitButtonDisabledState={this.state.isSubmitDisabled}
                    />

                </div>

            </div>

        );

    }

}

/**
 * Our main container for our ToDo components
 */
function ToDoBox() {

    return (

        <div className="row">

            <div className="col-sm-6">

                <ToDoList />

            </div>

        </div>

    );

}

/**
 * Base HTML for our App
 */
function App() {

    return (

        <div className="container pt-2">

            <ToDoBox />

        </div>

    );

}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
