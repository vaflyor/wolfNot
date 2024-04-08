import React from 'react';
import './Header.css'
import {useTelegram} from '../../hooks/useTelegram'


const Header = () => {
    const {tg} = useTelegram()
    return (
        <div>
            Header
            <p>{tg.initDataUnsafe?.user?.id}</p>
        </div>
    );
};

export default Header;