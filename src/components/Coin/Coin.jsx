import React from 'react';
import './Coin.css';

const Coin = ({increaseBalance, reduceStamina}) => {
    const handleClick = async () => {
        increaseBalance();
        reduceStamina()
    };

    return (
        <div className={'coin-wrapper'}>
            <img className={'coin-img'} src={'./media/coin.png'} alt={'Coin'} onClick={handleClick}/>
        </div>
    );
};

export default Coin;
