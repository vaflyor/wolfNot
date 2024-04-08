import React from 'react';
import axios from "axios";
import './Header.css';
import {useTelegram} from '../../hooks/useTelegram';


const Header = () => {
    const {tg} = useTelegram()

    const sendDataToServer = async () => {
        try {
            await axios.post('http://localhost:80/api/data', {
                value: tg.initDataUnsafe?.user?.id
                // value: 'Hello world'
            })
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <div>
            <p>{tg.initDataUnsafe?.user?.id}</p>
            <button onClick={sendDataToServer}>Send Data</button>
        </div>
    )
};

export default Header;
