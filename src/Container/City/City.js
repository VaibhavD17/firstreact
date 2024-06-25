import React, { Component } from 'react';

export default class City extends Component {

    render() {
        return (
            <>
                <h2>{this.props.cn === 'India' ? 'Surat' : 'New York'}</h2>
                <div>City</div>
            </>
        );
    }
}
