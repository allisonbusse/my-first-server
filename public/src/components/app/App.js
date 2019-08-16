import Component from '../Component.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PokeList from '../pokedex/PokeList.js';
import Search from '../options/Search.js';
import Sort from '../options/Sort.js';
import Paging from '../options/Paging.js';
import { getPokemon } from '../../services/pokedex-api.js';
import hashStorage from '../../services/hash-storage.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const paging = new Paging();
        const pagingDOM = paging.renderDOM();
        const pagingSection = dom.querySelector('#paging');
        pagingSection.appendChild(pagingDOM);

        const pokeList = new PokeList({ pokemons: [] });
        const pokeCards = dom.querySelector('#pokecards');
        const pokeListDOM = pokeList.renderDOM();
        pokeCards.appendChild(pokeListDOM);

        
        function loadPokemon() {
            const options = hashStorage.get();
            getPokemon(options)
                .then(data => {
                    const poke = data.results;
                    const totalCount = data.count;
                    pokeList.update({ pokemons: poke });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });

        

        const search = new Search();
        const searchDOM = search.renderDOM();
        const sidebar = dom.querySelector('#sidebar');
        sidebar.appendChild(searchDOM);  
        
        const sort = new Sort();
        const sortDOM = sort.renderDOM();
        sidebar.appendChild(sortDOM);  
        
        
        const footer = new Footer();
        const footerDOM = footer.renderDOM();
        dom.appendChild(footerDOM);
    }

    

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
            <main>
                <section id="sidebar">
                </section>
                <section id="paging">
                </section>
                <section id="pokecards">
                </section>
            </main>
                <!-- Footer goes here -->
            </div>
        `;
    }
}

export default App;