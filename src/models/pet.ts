export class Pet {
    id: number;
    isComplete: boolean;
    static crearId() {
        return Math.round(Math.random() * 1_000_000);
    }
    constructor(
        public name: string,
        public breed: string,
        public owner: string
    ) {
        this.id = Pet.crearId();
        this.isComplete = false;
    }
}
