import axios from 'axios';
import {API_KEY} from './secrets';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

class TMApi {
    static async request(endpoint, params={}) {
        let url 
        if (endpoint.includes('discovery')) {
            endpoint = endpoint.replace('/discovery/v2', '')
            url = `${BASE_URL}/${endpoint}`
        } else {
            url = `${BASE_URL}/${endpoint}.json`
        }

        try {
          return (await axios({ url, method: 'get', params: {...params, apikey: API_KEY} })).data;
        } catch (err) {
          console.error("API Error:", err.response);
        }
    };

    static async searchEvents(data) {
        let params = {...data}
        if (data.location) {
            if ( +data.location ) {
                params.postalCode = data.location
            } else {
                params.city = data.location
            };
            delete params.location
        };
        
        const res = await this.request('events', { ...params, size: 10 });
        return res;
    };

    static async searchAttractions(data) {
        let params = {...data}
        
        const res = await this.request('attractions', { ...params, size: 50 });
        return res;
    };

    static async getEventDetail(id) {
        const res = await this.request(`events/${id}`);
        return res;
    };

    static async getAttractions(classification) {
        const res = await this.request('attractions', {classificationName: classification, size: 8});
        return res;
    };

    static async loadMore(link) {
        const res = await this.request(link)
        return res;
    };

    static async getAttractionDetails(id) {
        const res = await this.request(`/attractions/${id}`);
        return res;
    };
};

export default TMApi;