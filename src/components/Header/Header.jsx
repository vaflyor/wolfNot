import React from 'react';
import './Header.css';
import { getStoredBalance } from "../../utils/localStorageUtils";

const Header = ({ userData, error }) => {
    const storedBalance = getStoredBalance();
    return (
        <div className={'header'}>
            <div className={'header-container'}>
                {storedBalance !== null ? <p>Balance: {storedBalance}</p> : userData && <p>Balance: {userData.coins}</p>}
                {error && <p>{error}</p>}
                <img className={'header__coin'} src={'./media/coins-solid.svg'} alt={'coin'} />
            </div>
        </div>
    );
};

export default Header;
