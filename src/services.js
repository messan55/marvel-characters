import axios from 'axios'

const { REACT_APP_API_KEY, REACT_APP_API_HASH } = process.env;

const fetchCharacters = async ({offset, limit}) => {
    let characters;
    if (offset === undefined) offset = 0;
    if (limit === undefined) limit = 20;
    try {
        const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}&offset=${offset}&limit=${limit}`);
        characters = response?.data;
    } catch (error) {
       console.log(error); 
    }                    
    return characters;   
}

const fetchCharacterById = async (payload) => {
    let character;
    try {
        const response = await axios.get(`http://gateway.marvel.com/v1/public/characters/${payload.id}?ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}`);
        character = response?.data;
    } catch (error) {
       console.log(error); 
    }                    
    return character;   
}

export { fetchCharacters, fetchCharacterById };