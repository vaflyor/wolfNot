import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import Coin from "../components/Coin/Coin";
import Stamina from "../components/Stamina/Stamina";
import {useTelegram} from "../hooks/useTelegram";

const Home = () => {
    const [ws, setWs] = useState(null);
    const [balance, setBalance] = useState(0);
    const [stamina, setStamina] = useState(0);
    const [staminaLimit, setStaminaLimit] = useState(0);
    const [boost, setBoost] = useState(0);
    const {tg} = useTelegram()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:3001/getInitialBalance', {telegramId: tg?.initDataUnsafe?.user?.id || 544362566});
                setBalance(response.data.coins);
                setStamina(response.data.stamina);
                setStaminaLimit(response.data.staminaLimit);
                setBoost(response.data.boost);
            } catch (error) {
                console.error('Error fetching initial balance:', error);
            }
        };
        fetchData();

        const websocket = new WebSocket('ws://localhost:8080');
        websocket.onopen = () => {
            console.log('Connected to server');
            setWs(websocket);
            const initMessage = { type: 'init', telegramId: tg?.initDataUnsafe?.user?.id || 544362566 };
            websocket.send(JSON.stringify(initMessage));
            console.log(initMessage)
        };


        websocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'balance_updated') {
                setBalance(data.coins);
            }
            if (data.type === 'stamina_updated') {
                setStamina(data.stamina);
            }
        };
        return () => {
            websocket.close();
        };
    }, []);


    const increaseBalance = () => {
        if (ws && stamina - boost >= 0) {
            ws.send(JSON.stringify({type: 'increase_balance'}));
        }
    };

    const reduceStamina = () => {
        if (ws && stamina - boost >= 0) {
            ws.send(JSON.stringify({type: 'reduce_stamina'}));
        }
    };

    return (
        <div id="home">
            <Header userData={balance}/>
            <Coin increaseBalance={increaseBalance} reduceStamina={reduceStamina}/>
            <Stamina stamina={stamina} staminaLimit={staminaLimit}/>
        </div>
    );
};

export default Home;
