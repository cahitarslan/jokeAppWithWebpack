import axios from 'axios';

class TranslateApi {
    constructor(ingilizceSaka) {
        this.baseURL = 'https://translation.googleapis.com';

        this.aranacakCumle = ingilizceSaka;
        this.axiosNesnesi = axios.create({
            baseURL: this.baseURL,
            params: {
                target: 'tr',
                key: 'AIzaSyCGG-hgYs08Ts1bKSsa5IOiwBRJYhXAWxQ',
                q: this.aranacakCumle,
            },
        });
    }

    async ceviriYap() {
        try {
            const ceviri = await this.axiosNesnesi.get('/language/translate/v2');
            console.log(ceviri.data.data.translations[0].translatedText);
            return ceviri.data.data.translations[0].translatedText;
        } catch (hata) {
            console.log(hata.response.data.error.message);
            // return hata.response.data.error.message;
            return 'Hata oluştu. Çeviri yapılamıyor..';
        }
    }
}

export function ceviriYap(ceviriYapilacakMetin) {
    const ceviri = new TranslateApi(ceviriYapilacakMetin).ceviriYap();
    return ceviri;
}
