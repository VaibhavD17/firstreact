import React, { Component } from 'react';

class Timer extends Component {

    // 1. It is used to initialize Component. It set initial value of state.
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    // 3. It is called after mounting component in the DOM. It is mostly used for fetching data from server.
    componentDidMount = () => {
        this.timeRef = setInterval(() => this.tick(), 1000);
    }

    // 4. It is used to do some work when state or props value changed.
    componentDidUpdate = (prevprops, prevstate) => {
        if (this.state.time !== prevstate) {
            console.log("componentDidUpdate called");
        }
    }

    // 5. It is used we move to onother component. It is used to occupied resorses.
    componentWillUnmount = () =>{
        clearInterval(this.timeRef)
    }


    // 2. It is used to display component. It is called everytime when state value changed.
    render() {
        return (
            <div>
                <h2>Timer</h2>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Timer;