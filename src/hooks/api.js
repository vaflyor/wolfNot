import axios from "axios";

const sendTgId = async (data) => {
    try {
        const response = await axios.post('https://wolfchik.space/api/', data);
        // const response = await axios.post('http://localhost:3001/', data);
        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

const updateBalance = async (data) => {
    try {
        const response = await axios.post('https://wolfchik.space/api/update-balance', data);
        // const response = await axios.post('http://localhost:3001/update-balance', data);
        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

const getReferralList = async (data) => {
    try {
        const response = await axios.post('https://wolfchik.space/api/referral', data);
        // const response = await axios.post('http://localhost:3001/referral', data);
        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

const boostInfo = async (data) => {
    try {
        // const response = await axios.post('http://localhost:3001/boost', data);
        const response = await axios.post('https://wolfchik.space/api/boost', data);

        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

const sendBalanceRoute = async (data) => {
    try {
        const response = await axios.post('https://wolfchik.space/api/boost1', data);
        // const response = await axios.post('http://localhost:3001/boost1', data);

        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

const boostUpdate = async (data) => {
    try {
        const response = await axios.post('https://wolfchik.space/api/update-boost-info', data);
        // const response = await axios.post('http://localhost:3001/update-boost-info', data);

        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

export {sendTgId, updateBalance, getReferralList, boostInfo, boostUpdate, sendBalanceRoute};
