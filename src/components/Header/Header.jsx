import React, { useState, useEffect } from 'react';
import { sendTgId } from '../../hooks/api';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const {tg} = useTelegram()

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await sendTgId({ tgId: 544362566 });
                const response = await sendTgId({ tgId: tg?.initDataUnsafe?.user?.id ||  444555666});
                setUserData(response.data);
                setError('');
            } catch (error) {
                setError('Error fetching user data');
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <p>{userData ? `Balance: ${userData.coins}` : ''}</p>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Header;
