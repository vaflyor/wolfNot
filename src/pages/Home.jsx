import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import { useTelegram } from "../hooks/useTelegram";
import Coin from '../components/Coin/Coin';
import { sendTgId } from '../hooks/api';
import { getStoredBalance, setStoreBalance } from '../utils/localStorageUtils';
import { useBeforeUnload } from '../hooks/useBeforeUnload';

const Home = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const { tg } = useTelegram();
    useBeforeUnload(userData, tg);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedBalance = getStoredBalance();
                if (storedBalance !== null) {
                    setUserData({ coins: storedBalance });
                } else {
                    const tgId = tg?.initDataUnsafe?.user?.id || 135792468;
                    const response = await sendTgId({ tgId });

                    if (response && response.data && response.data.coins !== undefined) {
                        setUserData(response.data);
                        setError('');
                    } else {
                        throw new Error('Invalid user data received');
                    }
                }
            } catch (error) {
                setError('Error fetching user data');
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [tg]);

    const increaseBalance = () => {
        setUserData(prevData => {
            const newBalance = (prevData.coins || 0) + 1;
            setStoreBalance(newBalance);
            return { ...prevData, coins: newBalance };
        });
    };

    return (
        <div id={'home'}>
            <Header userData={userData} error={error} />
            <Coin increaseBalance={increaseBalance} />
        </div>
    );
};

export default Home;