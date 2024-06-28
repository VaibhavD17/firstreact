import React, { useEffect, useState } from 'react';

function Timerfun(props) {
    // 1.
    const [time, settime] = useState(new Date())

    const tick = () => {
        settime(new Date())
    }

    // It is used to implement life cycle methods in function based component.
    useEffect(() => {

        // 3.componentDidMount,    4.componentDidUpdate
        const timeRef = setInterval(() => tick(), 1000)

        // 5.componentWillUnmount
        return  () => {
            clearInterval(timeRef)
        }
    }, [])

    // 2.
    return (
        <div>
            <h2>Timer function based</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timerfun;