import React, { useState } from 'react';
import Cityfun from '../Cityfun/Cityfun';

function Countryfun(props) {
    const [countryName, setCountry] = useState('India');

    const changeCountry = () => {
        setCountry('US')
    }

    return (
        <>
            <div>Countryfun</div>
            <p>{countryName}</p>
            <button onClick={changeCountry}> Change Country</button>
            <Cityfun cn={countryName} x={17} />
        </>
    );
}

export default Countryfun;