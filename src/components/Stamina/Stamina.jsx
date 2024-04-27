import React from 'react';
import './Stamina.css';

const Stamina = ({stamina, staminaLimit}) => {
    return (
        <div id="stamina">
            <img className="stamina-bolt" src="./media/bolt-solid.svg" alt=""/>
            {stamina} / {staminaLimit}
        </div>
    );
};

export default Stamina;
