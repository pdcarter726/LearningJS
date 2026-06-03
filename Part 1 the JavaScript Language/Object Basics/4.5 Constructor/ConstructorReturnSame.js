/*
    Is it possible to create functions A and B such that
    new A() == new B()? Provide an example.
*/

let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A();
let b = new B();

alert(a == b);