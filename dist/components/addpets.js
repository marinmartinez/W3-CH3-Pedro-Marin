import { Component } from './component.js';
export class AddPets extends Component {
    constructor(selector, handle) {
        super();
        this.selector = selector;
        this.handle = handle;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (ev) => {
                ev.preventDefault();
                console.log('Tengo que añadir');
                handle(ev);
            });
        }, 100);
    }
    createTemplate() {
        return `
      <form>
            <div>
                <input type="text" id="name" placeholder="Cuál es es el nombre de la mascota" required>
            </div>
            <div>
                <input type="text" id="breed" placeholder="Cuál es la raza de la mascota" required>
            </div>
            <div>
                <input type="text" id="owner" placeholder="Quien es su dueño" required>
            </div>
            <button type="submit">Save</button>
        </form>
        
        `;
    }
}
