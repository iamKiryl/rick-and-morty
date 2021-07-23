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
        return {
            results: res.results, 
            res
        }
            ;
    }
    getAllEpisodes = async () => {
        const res =  await this.getResource('/episode/');
        return {
            results: res.results, 
            res
        }
    }
    getAllLocations = async () => {
        const res = await this.getResource('/location/');
        return {
            results: res.results, 
            res
        }
    }
    getCharacter = async (id) => {
        const character = await this.getResource(`/character/${id}/`);
        return this._transformCharacter(character);
    }

    getEpisode = async (id) => {
        const episode = await this.getResource(`/episode/${id}`);
        return episode;
    }

    getLocation = async (id) => {
        const location = await this.getResource(`/location/${id}`);
        return location;
    }

    isSet = data => data ? data : 'no data :(';

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            status: this.isSet(char.status),
            gender: this.isSet(char.gender),
            origin: this.isSet(char.origin.name), 
        };
    }

    _transformEpisode = (episode) => {
        return {
            id: this._extractId(episode),
            name: this.isSet(episode.name),
            status: this.isSet(episode.status),
            gender: this.isSet(episode.gender),
            origin: this.isSet(episode.origin.name), 
        };
    }

    _transformLocatoin = (location) => {
        return {
            id: this._extractId(location),
            name: this.isSet(location.name),
            status: this.isSet(location.status),
            gender: this.isSet(location.gender),
            origin: this.isSet(location.origin.name), 
        };
    }
    
}