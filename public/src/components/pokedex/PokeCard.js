import Component from '../Component.js';

class PokeCard extends Component {
    renderHTML() {
        const pokemons = this.props.pokemons;

        return /*html*/`
        <li class="each-card">
        <h2>${pokemons.pokemon}</h2>
        <img class="poke-image" src="${pokemons.url_image}">
        <p>
            <span class="type-span" style="background-color:${pokemons.color_1}">${pokemons.type_1}</span> | 
            <span class="type-span" style="background-color:${pokemons.color_2}">${pokemons.type_2}</span>
        </p>
    </li>
        `;
    }
}

export default PokeCard;