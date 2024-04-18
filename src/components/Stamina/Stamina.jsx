import React from 'react';
import './Stamina.css';

const Stamina = ({ stamina, staminaLimit, error }) => {
    return (
        <div id="stamina">
            {error && <p>{error}</p>}
            <img className="stamina-bolt" src="./media/bolt-solid.svg" alt="" />
            {(stamina !== null || staminaLimit !== null) ? (
                <p>{`${stamina} / ${staminaLimit}`}</p>
            ) : (
                <p>{error}</p>
            )}
        </div>
    );
};

export default Stamina;
