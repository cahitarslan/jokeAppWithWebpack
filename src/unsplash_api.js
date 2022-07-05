import axios from 'axios';

class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID qZnKTivBVH9p1WsMsgtE4GIc8KrlNKVtGgSUaNHSKxA';
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID,
            },
            params: {
                query: 'joker',
                count: 1,
            },
        });
    }

    async randomResimGetir() {
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data[0].urls.regular);
            return resimResponse.data[0].urls.regular;
        } catch (hata) {
            console.log(hata.response);
            return 'https://miro.medium.com/max/1838/1*MIrLuyiCDpdNbnFYxYlKtA.png';
        }
    }
}

export function resimGetir() {
    const getirilenResim = new UnsplashApi().randomResimGetir();
    return getirilenResim;
}
