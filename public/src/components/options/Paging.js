import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

class Paging extends Component {
    onRender(dom) {
        const prevButton = dom.querySelector('#previous-page-button');
        const nextButton = dom.querySelector('#next-page-button');
        
        if(!prevButton) {
            return;
        }
        
        const currentPage = this.props.currentPage || 1;
        function updatePage(increment) {
            hashStorage.set({ page: currentPage + increment });
        }
        
        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });
        
        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
    }

    renderHTML() {
        const currentPage = this.props.currentPage || 1;
        const perPage = 20;
        const totalCount = this.props.totalCount;

        if(!totalCount) {
            return /*html*/`
                <p class="paging">No results, try another search</p>
            `;
        }

        const lastPage = Math.ceil(totalCount / perPage);
    
        return /*html*/`
        <div>
        <button id="previous-page-button" ${currentPage === 1 ? 'disabled' : ''}><< Prevous</button>
        <span>Page ${currentPage} of ${lastPage}</span>
        <button id="next-page-button" ${currentPage === lastPage ? 'disabled' : ''}>Next >></button>
        </div>
        `;
    }
}

export default Paging;