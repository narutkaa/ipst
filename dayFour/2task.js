class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Zora', 'Zora', 100, 20);
console.log(`Salary of ${worker.name} ${worker.surname}: $${worker.getSalary()}`); // Output: Salary of Zora Zora: $2000
