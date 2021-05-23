export default class GotService{
    constructor(){
        this._apiBase = 'https://rickandmortyapi.com/api';
    }
    getResource = async (url = '') => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters = async () => {
        const res = await this.getResource('/character/');
        return res.results;
    }
    getAllEpisodes = async () => {
        const res =  await this.getResource('/episode/');
        return res.results;
    }
    getAllLocations = async () => {
        const res = await this.getResource('/location/');
        return res.results;
    }
    
}