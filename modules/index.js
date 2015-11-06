import {sum, square, variable, MyClass} from './import';

// 25
console.log(square(5));

var inputData = {
    name: 'Kasi Chandran',
    empId: 1000
}

var o = new MyClass(inputData);

console.log(o.getName());