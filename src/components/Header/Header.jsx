import React from 'react';
import './Header.css';

const Header = ({ userData, error }) => {
    return (
        <div className={'header'}>
            <div className={'header-container'}>
                <p>{userData ? `Balance: ${userData.coins}` : ''}</p>
                {error && <p>{error}</p>}
                <img className={'header__coin'} src={'./media/coins-solid.svg'} alt={'coin'}/>
            </div>
        </div>
    );
};

export default Header;