import * as api from './api';

let TURNICeServers = null;
export const fetchTURNCredentials =  async () => {
    const responseData = await api.getTURNCredentials();
    if(responseData.token?.iceServers){
        TURNICeServers = responseData.token?.iceServers;
    };
    return TURNICeServers;
}

export const getTurnIceServers = () => {
    return TURNICeServers;
}