import React, {Component} from 'react';
import './App.css';
import Clock from './Clock.jsx';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        };
        console.log('constructor')
    }

    changeDeadLine() {
        this.setState({deadline: this.state.newDeadline});
        console.log('changeDeadLine()')
    }
    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} /> 
                <Form inline={true}>
                    <FormControl
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}/>
                    <Button
                        onClick={() => {
                        this.changeDeadLine()
                    }}>Submit</Button>
                </Form> 
            </div> 
        );
    }
}

export default App;