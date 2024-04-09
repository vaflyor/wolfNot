import React from 'react';
import './Coin.css';

const Coin = ({increaseBalance}) => {
    // Додаємо обробник подій для кліку на монеті
    const handleClick = () => {
        increaseBalance();
    };

    return (
        <div className={'coin-wrapper'}>
            {/* Додаємо обробник подій для кліку на монеті */}
            <img className={'coin-img'} src={'./media/coin.png'} alt={'Coin'} onClick={handleClick} />
            <div className={'main-btn__wrapper'}>
                <button className={'main-btn'}>Claim</button>
            </div>
        </div>
    );
};

export default Coin;
