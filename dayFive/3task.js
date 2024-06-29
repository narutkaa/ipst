class Calculation {
    constructor() {
        this.calculationLine = '';
    }

    // set value
    setterCalculationLine(value) {
        this.calculationLine = value;
    }

    // add symbol to end
    setLastSymbolCalculationLine(symbol) {
        this.calculationLine += symbol;
    }

    // getter
    getterCalculationLine() {
        return this.calculationLine;
    }

    // last symbol
    lastSymbol() {
        if (this.calculationLine.length === 0) return '';
        return this.calculationLine[this.calculationLine.length - 1];
    }

    // remove last symbol
    deleteLastSymbol() {
        if (this.calculationLine.length > 0) {
            this.calculationLine = this.calculationLine.slice(0, -1);
        }
    }
}

const calc = new Calculation();

calc.setterCalculationLine('zora');
console.log(calc.getterCalculationLine()); // Output: 'zora'

calc.setLastSymbolCalculationLine('!');
console.log(calc.getterCalculationLine()); // Output: 'zora!'

console.log(calc.lastSymbol()); // Output: '!'

calc.deleteLastSymbol();
console.log(calc.getterCalculationLine()); // Output: 'zora'
