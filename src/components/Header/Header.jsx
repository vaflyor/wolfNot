import React from 'react';
import './Header.css';

const Header = ({ userData }) => {
    return (
        <div className={'header'}>
            <div className={'header-container'}>
                <p>Balance: {userData}</p>
                <img className={'header__coin'} src={'./media/coins-solid.svg'} alt={'coin'} />
            </div>
        </div>
    );
};

export default Header;
