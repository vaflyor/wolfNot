import {useEffect} from 'react';
import {updateBalance} from "./api";

export const useBeforeUnload = (userData, tg) => {
    useEffect(() => {
        const handleBeforeUnload = async () => {
            const balanceFromLocalStorage = localStorage.getItem("balance");
            const staminaFromLocalStorage = localStorage.getItem("stamina");

            if (balanceFromLocalStorage && staminaFromLocalStorage) {
                try {
                    localStorage.removeItem('balance');
                    localStorage.removeItem('stamina');

                    const dataToSend = {
                        tgId: tg?.initDataUnsafe?.user?.id || 544362566,
                        balance: balanceFromLocalStorage,
                        stamina: staminaFromLocalStorage
                    };
                    const response = await updateBalance(dataToSend);
                    console.log('Data sent successfully:', response);
                } catch (error) {
                    console.error('Error sending data:', error);
                }
            } else {
                console.warn('No balance value found.');
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [userData, tg]);
};
