import axios from 'axios'

export default {
    async getList(symbol) {
        const glass = await axios.get(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`);
        return glass.data;
    },
    subscribe(symbol) {
        return new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`);
    }
};
