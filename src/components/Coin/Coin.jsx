import React from 'react';
import './Coin.css';
import { sendBalanceToServer } from '../../hooks/api';

const Coin = ({ increaseBalance }) => {
    const handleClick = async () => {
        increaseBalance();
        const storedBalance = localStorage.getItem('balance');
    };
    return (
        <div className={'coin-wrapper'}>
            <img className={'coin-img'} src={'./media/coin.png'} alt={'Coin'} onClick={handleClick} />
        </div>
    );
};

export default Coin;
