import axios from "axios";

const sendTgId = async (data) => {
    try {
        const response = await axios.post('http://localhost:80/', data);
        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

const updateBalance = async (data) => {
    try {
        const response = await axios.post('http://localhost:80/update-balance', data);
        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

const getReferralList = async (data) => {
    try {
        const response = await axios.post('http://localhost:80/referral', data);
        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

export { sendTgId, updateBalance, getReferralList};
