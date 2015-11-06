var sum = (a, b = 6) => (a + b);

var square = (b) => {
    return b * b;
};

var variable = 8;

class MyClass {
    constructor(input) {
        this.name = input.name;
        this.empId = input.empId
    }
    getName() {
        return this.name;
    }
}

export { sum, square, variable, MyClass };