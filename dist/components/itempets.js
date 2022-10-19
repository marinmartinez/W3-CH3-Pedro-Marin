import { Component } from './component.js';
export class ItemPet extends Component {
    constructor(selector, item, handleDelete, handleChange) {
        super();
        this.selector = selector;
        this.item = item;
        this.handleDelete = handleDelete;
        this.handleChange = handleChange;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#i${this.item.id}`).addEventListener('click', () => {
                this.handleDelete(this.item.id);
            });
            document.querySelector(`#c${this.item.id}`).addEventListener('change', () => {
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
