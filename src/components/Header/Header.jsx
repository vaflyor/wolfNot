import React from 'react';
import './Header.css'
import {useTelegram} from '../../hooks/useTelegram'


const Header = () => {
    const {user} = useTelegram()
    return (
        <div>
            Header
            <p>{user?.id}</p>
        </div>
    );
};

export default Header;