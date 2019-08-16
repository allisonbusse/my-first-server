const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex/';

export function getPokemon(options) {
    const page = options.page || 1;
    const search = options.search;
    
    const url = `${URL}?page=${page || 1}`;
    return fetch(url)
        .then(response => response.json())
        // .then(results => {
        //     return {
        //         results: results
        //     };
        }
