import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

/**
 * This component contains our textarea field, which will contain our unformatted
 * markdown code
 *
 * It uses props for its `value` and its change event
 */
class TextAreaField extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (

            <div className={this.props.wrapperClass + ' form-group mb-0'}>

                <textarea id="markdown" className="form-control" value={this.props.value} onChange={this.props.onChange} rows="10"></textarea>

            </div>

        );

    }

}

TextAreaField.propTypes = {
    value:        React.PropTypes.string,
    onChange:     React.PropTypes.func,
    wrapperClass: React.PropTypes.string,
};

/**
 * This component contains only 1 prop: `value`
 *
 * The value prop should just contain the unformatted markdown. Our marked property
 * will actually compile the markdown into HTML
 */
class Previewer extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (

            <div className={this.props.wrapperClass + ' card mb-0'}>

                <div className="card-block" ref={this.props.refernce} dangerouslySetInnerHTML={{__html: marked(this.props.value)}}></div>

            </div>

        );

    }

}

Previewer.propTypes = {
    value:        React.PropTypes.string,
    refernce:     React.PropTypes.func,
    wrapperClass: React.PropTypes.string,
};

/**
 * This is our main application component. It handles the textarea's value so we
 * can pass it into the previewr component
 */
class MarkdownPreviewer extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            textAreaValue:  '# Heading 1'
        };

        this.style = {
            'display': 'flex'
        };

        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    }

    handleTextAreaChange(event) {

        this.setState({
            textAreaValue: event.target.value
        });

    }

    render() {

        return(

            <div>

                <div className="row">

                    <div className="col-sm-6">
                        <label>Preview</label>
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="markdown">Markdown</label>
                    </div>

                </div>

                <div className="row" style={this.style}>

                    <TextAreaField wrapperClass="col-sm-6" value={this.state.textAreaValue} onChange={this.handleTextAreaChange} />

                    <Previewer wrapperClass="col-sm-6" value={this.state.textAreaValue} />

                </div>

            </div>

        );

    }

}

/**
 * Base HTML for our App
 */
function App() {

    return (

        <div className="container pt-2">

            <MarkdownPreviewer />

        </div>

    );

}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
