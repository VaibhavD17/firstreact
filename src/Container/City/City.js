import React, { Component } from 'react';

export default class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: 'Surat'
        }
    }

    changeCity = () => {
        this.setState({
            cityName:'Bhavanagar'
        })
    }

    render() {
        return (
            <>
                <div>City</div>
                <p>{this.state.cityName}</p>
                <button onClick={() => this.changeCity()}>Change City</button>
            </>
        );
    }
}
