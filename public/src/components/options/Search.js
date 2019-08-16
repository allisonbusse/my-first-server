import Component from '../Component.js';

class Search extends Component {
    renderHTML() {
        return /*html*/`
        <p>Search<br>
        <input type="text" id="search">
        </p>
        `;
    }
}

export default Search;