import React from 'react'
import './Stopwatch.css'

class Stopwatch extends React.Component {
    state = {
        countSeconds: 0,
        countMinutes: 0,
        countHours: 0,
        running: false,
        started: false
    };

    
    handleStart = () => {
        if (this.state.running !== true) {
        this.interval = setInterval(() => {
            this.setState({countSeconds: this.state.countSeconds + 1})
        }, 1000)
        this.setState({running: true})
        this.setState({started: true})
    }
};

    handlePause = () => {
        if (this.state.running !== false) {
            clearInterval(this.interval)
            this.setState({running: false})
        }
    }

    handleReset = () => {
            this.setState({countSeconds: 0})
            this.setState({countMinutes: 0})
            this.setState({countHours: 0})
            this.setState({running: false})
            this.setState({started: false})
            clearInterval(this.interval)
    };

    render() {
        const styles = {
            color: this.state.running ? 'lightgreen' : 'lightcyan',    
        }
        const buttonStyles = {
            visibility: this.state.started ? 'visible' : 'hidden'
        }
        const countSeconds = this.state.countSeconds;
        const countMinutes = this.state.countMinutes;
        const countHours = this.state.countHours;
        if (this.state.running !== false && this.state.countSeconds >= 60) {
            this.setState({countSeconds: 0})
            this.setState({countMinutes: this.state.countMinutes + 1})
            } else if (this.state.running !==false && this.state.countMinutes >= 60) {
                this.setState({countSeconds: 0})
                this.setState({countMinutes:0})
                this.setState({countHours: this.state.countHours + 1})
            }

        return (
            <div class="watch" style={styles}>
                <h2>Time: {countHours}:{countMinutes}:{countSeconds} </h2>
                <div style={buttonStyles}>
                    <button class="resetBtn" onClick={this.handleReset}>Reset</button>
                    <button class="startBtn" onClick={this.handleStart}>Start</button>
                    <button class= "pauseBtn" onClick={this.handlePause}>Pause</button>
                </div>
            </div>
        )
    }
}


export default Stopwatch