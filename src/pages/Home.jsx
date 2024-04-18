import React, {useState, useEffect} from 'react';
import Header from '../components/Header/Header';
import Coin from "../components/Coin/Coin";
import Stamina from "../components/Stamina/Stamina";
import {useTelegram} from "../hooks/useTelegram";
import {sendTgId} from '../hooks/api';
import {getStoredBalance, setStoredBalance, getStoredStamina, setStoredStamina} from '../utils/localStorageUtils';
import {useBeforeUnload} from '../hooks/useBeforeUnload';

const Home = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [staminaLimit, setStaminaLimit] = useState(null);
    const [stamina, setStamina] = useState(null);
    const {tg} = useTelegram();
    useBeforeUnload(userData, tg);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedBalance = getStoredBalance();
                if (storedBalance !== null) {
                    setUserData({coins: storedBalance});
                } else {
                    const tgId = tg?.initDataUnsafe?.user?.id || 544362566;
                    const response = await sendTgId({tgId});

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

    const fetchStaminaLimit = async () => {
        const tgId = tg?.initDataUnsafe?.user?.id || 544362566;
        try {
            const response = await sendTgId({tgId});
            if (response && response.data && response.data.staminaLimit !== undefined) {
                setStaminaLimit(response.data.staminaLimit);

                const storedStamina = getStoredStamina();

                if (storedStamina) {
                    setStamina(storedStamina);
                    console.log(storedStamina);
                } else {
                    setStamina(response.data.stamina);
                }
                setError('');
            } else {
                throw new Error('Invalid stamina limit data received');
            }
        } catch (error) {
            setError('Error fetching stamina limit');
            console.error('Error fetching stamina limit:', error);
        }
    };

    useEffect(() => {
        fetchStaminaLimit();
    }, []);

    useEffect(() => {
        const increaseStaminaAutomatically = () => {
            if (stamina < 1000) {
                setStamina(prevStamina => {
                    const newStamina = prevStamina + 1;
                    setStoredStamina(newStamina);
                    return newStamina;
                });
            }
        };

        const interval = setInterval(increaseStaminaAutomatically, 1000);

        return () => clearInterval(interval);
    }, [stamina]);


    const increaseBalance = () => {
        if (stamina > 0) {
            setUserData(prevData => {
                const newBalance = (prevData.coins || 0) + 1;
                setStoredBalance(newBalance);
                return {...prevData, coins: newBalance};
            });
        }
    };

    const reduceStamina = () => {
        if (stamina > 0) {
            setStamina(prevData => {
                const newStamina = prevData - 1;
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
