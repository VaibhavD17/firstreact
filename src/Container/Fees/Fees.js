import React, { Component } from 'react';

class Fees extends Component {



    render() {
        return (
            <div>
                <h2>
                    {this.props.course === 'full_stack' ? '75000' : `${this.props.course === "react" ? '66000' : `${this.props.course === 'node' ? 55000 : "Select Course"}`}`}
                </h2>
            </div>
        );
    }
}

export default Fees;