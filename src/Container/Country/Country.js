import React, { Component } from 'react';

// Class base component
// state: It is an object that store information of particular component

export default class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countryName: 'India'
        }
    }

    changeCountry = () => {
        this.setState ({
            countryName:'US'
        })
    } 


    render() {
        return (
            <>
                <div>Country</div>
                <p>{this.state.countryName}</p>
                <button onClick={() => this.changeCountry ()}>Change Country</button>
            </>
        );
    }
}
