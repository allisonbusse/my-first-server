const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex/';

export function getPokemon(options) {
    const page = options.page || 1;
    const search = options.search;
    const sort = options.sort;
    
    const url = `${URL}?page=${page || 1}&pokemon=${search || ''}&sort=${sort || ''}&direction=desc`;
    return fetch(url)
        .then(response => response.json());
}
