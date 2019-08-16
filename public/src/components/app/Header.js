import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header><a href="index.html">
            <h1>Pokedex</h1></a>
        </header>
        `;
    }
}

export default Header;