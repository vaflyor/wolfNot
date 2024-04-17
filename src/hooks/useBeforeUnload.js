import { useEffect } from 'react';
import {updateBalance} from "./api";

export const useBeforeUnload = (userData, tg) => {
    useEffect(() => {
        const handleBeforeUnload = async () => {
            const balanceFromLocalStorage = localStorage.getItem("balance");

            if (balanceFromLocalStorage) {
                try {
                    localStorage.removeItem('balance');

                    const dataToSend = {
                        tgId: tg?.initDataUnsafe?.user?.id,
                        // tgId: 135792468,
                        balance: balanceFromLocalStorage
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
