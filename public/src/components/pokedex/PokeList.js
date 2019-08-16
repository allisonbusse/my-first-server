import Component from '../Component.js';
import PokeCard from './PokeCard.js';

class PokeList extends Component {
    onRender(dom) {
        const pokemons = this.props.pokemons;

        pokemons.results.forEach(element => {
            const props = { pokemons: element };
            const pokeCard = new PokeCard(props);
            const pokeCardDOM = pokeCard.renderDOM();
            dom.appendChild(pokeCardDOM);
        });
    }

    renderHTML() {
        return /*html*/`
        <ul id="pokemon"></ul>
        `;
    }
}

export default PokeList;