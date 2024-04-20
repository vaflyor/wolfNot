import React, {useState, useEffect} from 'react';
import Header from '../components/Header/Header';
import Coin from "../components/Coin/Coin";
import Stamina from "../components/Stamina/Stamina";
import {useTelegram} from "../hooks/useTelegram";
import {sendTgId} from '../hooks/api';
import {setStoredBalance, getStoredStamina, setStoredStamina} from '../utils/localStorageUtils';
import {useBeforeUnload} from '../hooks/useBeforeUnload';

const Home = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [staminaLimit, setStaminaLimit] = useState(null);
    const [stamina, setStamina] = useState(null);

    const [boost, setBoost] = useState(null);

    const {tg} = useTelegram();
    useBeforeUnload(userData, tg);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tgId = tg?.initDataUnsafe?.user?.id;

                const response = await sendTgId({tgId});
                if (response && response.data) {
                    if (response.data.coins !== undefined) {
                        setUserData(response.data);
                    }
                    if (response.data.staminaLimit !== undefined) {
                        setStaminaLimit(response.data.staminaLimit);
                    }
                    if (response.data.boost !== undefined) {
                        setBoost(response.data.boost)
                    }

                    const storedStamina = getStoredStamina();
                    if (storedStamina !== null) {
                        setStamina(storedStamina);
                    } else if (response.data.stamina !== undefined) {
                        setStamina(response.data.stamina);
                    }

                    setError('');
                } else {
                    throw new Error('Invalid user data received');
                }
            } catch (error) {
                setError('Error fetching user data');
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [tg]);

    useEffect(() => {
        const increaseStaminaAutomatically = () => {
            if (stamina < staminaLimit) {
                setStamina(prevStamina => {
                    const newStamina = prevStamina + 1;
                    setStoredStamina(newStamina);
                    return newStamina;
                });
            }
        };

        const interval = setInterval(increaseStaminaAutomatically, 1000);

        return () => clearInterval(interval);
    }, [stamina, staminaLimit]);

    const increaseBalance = () => {
        if (stamina > 0) {
            setUserData(prevData => {
                const newBalance = (prevData.coins || 0) + boost;
                setStoredBalance(newBalance);
                return {...prevData, coins: newBalance};
            });
        }
    };

    const reduceStamina = () => {
        if (stamina > 0) {
            setStamina(prevData => {
                const newStamina = prevData - boost;
                setStoredStamina(newStamina);
                return newStamina;
            });
        }
    };

    return (
        <div id="home">
            <Header userData={userData} error={error}/>
            <Coin increaseBalance={increaseBalance} reduceStamina={reduceStamina}/>
            <Stamina
                stamina={stamina}
                staminaLimit={staminaLimit}
                error={error}
            />
        </div>
    );
};

export default Home;
