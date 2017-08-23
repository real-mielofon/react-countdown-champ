import React, {Component} from 'react';
import './App.css'

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            deadline: props.deadline
        }
        console.log('construct Clock state = ', this.state);
    }

    componentWillMount() {
        this.getTimeUntil(this.state.deadline);
        console.log('Clock componentWillMount = ', this.state.deadline);
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
        console.log('Clock componentDidMount = ', this.state.deadline);
    }

    leadingZero(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time  = Date.parse(deadline) - Date.parse(new Date());
        
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor(time/(1000*60*60*24));
        
        this.setState({
            days: days, 
            hours: hours, 
            minutes: minutes,
            seconds: seconds});
    }

    render() {
        
        return (
            <div>
                <div className="Clock-days">
                    <span className="Clock-number">{this.leadingZero(this.state.days)}</span>
                    days
                </div>
                <div className="Clock-hours">
                    <span className="Clock-number">{this.leadingZero(this.state.hours)}</span>
                    hours
                </div>
                <div className="Clock-minutes">
                    <span className="Clock-number">{this.leadingZero(this.state.minutes)}</span>
                    minutes
                </div>
                <div className="Clock-seconds">
                    <span className="Clock-number">{this.leadingZero(this.state.seconds)}</span>
                    seconds
                </div>
            </div>
        )
    }
}
export default Clock;