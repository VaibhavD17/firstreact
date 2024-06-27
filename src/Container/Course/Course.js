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
        this.setState({
            selectValue: e
        })
    }

    render() {
        return (
            <div>
                <select onChange={(e) => this.hendleCourse(e.target.value)}>
                    <option value="0">--Select Course --</option>
                    <option value="full_stack">Full Stack</option>
                    <option value="react">React</option>
                    <option value="node">Node</option>
                </select>
                <Fees course={this.state.selectValue}/>
            </div>
        );
    }
}

export default Course;