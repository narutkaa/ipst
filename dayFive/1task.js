class Worker {
    #name;
    #surname;
    #rate;
    #days;

    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
в
    getName() {
        return this.#name;
    }

    getSurname() {
        return this.#surname;
    }

    getRate() {
        return this.#rate;
    }

    getDays() {
        return this.#days;
    }

    setRate(rate) {
        this.#rate = rate;
    }

    setDays(days) {
        this.#days = days;
    }

    getSalary() {
        return this.#rate * this.#days;
    }
}

const worker = new Worker('Zora', 'Zora', 100, 20);
console.log(`Name: ${worker.getName()}`);
console.log(`Surname: ${worker.getSurname()}`);
console.log(`Rate: ${worker.getRate()}`);
console.log(`Days: ${worker.getDays()}`);
console.log(`Salary of ${worker.getName()} ${worker.getSurname()}: $${worker.getSalary()}`); // Output: Salary of Zora Zora: $2000

worker.setRate(120);
worker.setDays(22);
console.log(`Updated rate: ${worker.getRate()}`);
console.log(`Updated days: ${worker.getDays()}`);
console.log(`Updated salary of ${worker.getName()} ${worker.getSurname()}: $${worker.getSalary()}`); // Output: Updated salary of Zora Zora: $2640