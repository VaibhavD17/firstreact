import React, { useEffect, useState } from 'react';

function Timerfun(props) {

    const [time, settime] = useState(new Date())

    const tick = () => {
        settime(new Date())
    }

    useEffect(() => {
        setInterval(() => tick())
    }, 1000)

    return (
        <div>
            <h2>Timer function based</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timerfun;