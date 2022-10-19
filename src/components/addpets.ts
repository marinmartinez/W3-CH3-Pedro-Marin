import { Component } from './component.js';

export class AddPets extends Component {
    template: string;
    constructor(public selector: string, public handle: (ev: Event) => void) {
        super();
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', (ev: Event) => {
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
