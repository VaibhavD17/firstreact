import React, { useState } from 'react';

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
        </>
    );
}

export default Countryfun;