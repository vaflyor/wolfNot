import React from 'react';
import './Coin.css';

const Coin = ({ increaseBalance }) => {
    const handleClick = async () => {
        increaseBalance();
    };
    return (
        <div className={'coin-wrapper'}>
            <img className={'coin-img'} src={'./media/coin.png'} alt={'Coin'} onClick={handleClick} />
        </div>
    );
};

export default Coin;
