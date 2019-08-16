import Component from '../Component.js';

class Sort extends Component {
    renderHTML() {
        return /*html*/`
        <p>Sort by:<br>
                <button id="attack">Attack</button>
                <button id="speed">Speed</button>
            </p>
        `;
    }
}

export default Sort;