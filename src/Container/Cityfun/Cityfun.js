import React, { useState } from 'react';

function Cityfun(props) {
    const [cityName, setCityname]= useState('Surat')

    const changeCity = () => {
        setCityname('Bhavnagar')
    }

    return (
        <>
        <div>Cityfun</div>
        <p>{cityName}</p>
        <button onClick={changeCity}>Change City</button>
        </>
    );
}

export default Cityfun;