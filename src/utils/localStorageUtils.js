export const getStoredBalance = () => {
    const storedBalance = localStorage.getItem('balance');
    return storedBalance ? parseInt(storedBalance) : null;
};

export const setStoreBalance = (balance) => {
    localStorage.setItem('balance', balance);
};
