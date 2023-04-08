import axios from 'axios';

const serverApi = 'https://webrtc-back.onrender.com/api';

export const getRoomExits = async (roomId) => {
    const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
    return response.data;
}

export const getTURNCredentials = async () => {
    const response = await axios.get(`${serverApi}/get-turn-credentials`);
    return response.data;
}