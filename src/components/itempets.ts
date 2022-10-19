import { Component } from './component.js';
import { Pet } from '../models/pet.js';
export class ItemPet extends Component {
    template!: string;
    constructor(
        public selector: string,
        public item: Pet,
        public handleDelete: (id: number) => void,
        public handleChange: (id: number) => void
    ) {
        super();
        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        setTimeout(() => {
            (
                document.querySelector(`#i${this.item.id}`) as HTMLElement
            ).addEventListener('click', () => {
                this.handleDelete(this.item.id);
            });
            (
                document.querySelector(`#c${this.item.id}`) as HTMLElement
            ).addEventListener('change', () => {
                this.handleChange(this.item.id);
            });
        }, 100);
    }

    createTemplate() {
        return `
        <li>
            <input id="c${this.item.id}"
            type="checkbox" ${this.item.isComplete ? 'checked' : ''}>
            <span>${this.item.name}</span> 
            <span>${this.item.breed}</span>
            <span>${this.item.owner}</span>
            <span class="button" id="${this.item.id}">🗑️</span>
        </li>`;
    }
}
