import React, { Component } from 'react';
import Fees from '../Fees/Fees';

class Course extends Component {
    constructor (props) {
        super (props);
        this.state = {
            selectValue : ""
        }

    } 

    hendleCourse = (e) => {
        console.log(e);
        this.setState({
            selectValue: e
        })
    }

    render() {
        return (
            <div>
                <select id='course' onChange={(e) => this.hendleCourse(e.target.value)}>
                    <option value="0">--Select Course --</option>
                    <option value="full_stack">Full Stack</option>
                    <option value="react">React</option>
                    <option value="node">Node</option>
                </select>
                <p>{this.state.selectValue}</p>
                <Fees course={this.state.selectValue}/>
            </div>
        );
    }
}

export default Course;