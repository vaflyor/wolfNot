import axios from "axios";

const sendTgId = async (data) => {
    try {
        const response = await axios.post('http://localhost:80', data);
        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

export {sendTgId};
