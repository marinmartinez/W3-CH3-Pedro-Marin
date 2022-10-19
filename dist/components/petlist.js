import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { Store } from '../services/storage.js';
import { AddPets } from './addpets.js';
import { Component } from './component.js';
import { ItemPet } from './itempets.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.storeService = new Store('Pets');
        if (this.storeService.getStore().length === 0) {
            this.pets = [...PETS];
            this.storeService.setStore(this.pets);
        }
        else {
            this.pets = this.storeService.getStore();
        }
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPets('slot#add-task', this.handleAdd.bind(this));
    }
    createTemplate() {
        let template = `<section>
                <h2>Add Pets</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.pets.forEach((item) => {
            template += new ItemPet('', item, this.handlerEraser.bind(this), this.handlerComplete.bind(this)).template;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev) {
        const name = document.querySelector('#name')
            .value;
        const breed = document.querySelector('#breed')
            .value;
        const owner = document.querySelector('#owner')
            .value;
        this.pets.push(new Pet(name, breed, owner));
        this.storeService.setStore(this.pets);
        this.manageComponent();
    }
    handlerEraser(deletedID) {
        this.pets = this.pets.filter((item) => item.id !== deletedID);
        this.storeService.setStore(this.pets);
        this.manageComponent();
    }
    handlerComplete(changeID) {
        const i = this.pets.findIndex((item) => item.id === changeID);
        this.pets[i].isComplete = !this.pets[i].isComplete;
        this.storeService.setStore(this.pets);
    }
}
