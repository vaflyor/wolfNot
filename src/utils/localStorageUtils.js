export const getStoredBalance = () => {
    const storedBalance = localStorage.getItem('balance');
    return storedBalance ? parseInt(storedBalance) : null;
};

export const setStoredBalance = balance => localStorage.setItem('balance', balance);

export const getStoredStamina = () => {
    const storedStamina = localStorage.getItem('stamina');
    return storedStamina ? parseInt(storedStamina) : null;
};

export const setStoredStamina = stamina => localStorage.setItem('stamina', stamina);
