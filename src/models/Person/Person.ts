export abstract class Person {
    constructor(
        public id_number: string,
        public name: string,
        public email: string
    ) {
        this.id_number = id_number;
        this.name = name;
        this.email = email;
    }
}