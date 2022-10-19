export class Pet {
    constructor(name, breed, owner) {
        this.name = name;
        this.breed = breed;
        this.owner = owner;
        this.id = Pet.crearId();
        this.isComplete = false;
    }
    static crearId() {
        return Math.round(Math.random() * 1000000);
    }
}
