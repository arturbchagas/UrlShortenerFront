import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/api/url'
});

export const createShortUrl = async (full: string) => {
    const response = await api.post('/shorten', {full});
    return response.data;
}

export const getOriginalUrl = async (short: string) => {
    const response = await api.get(`/${short}`)
    return response.data;
}