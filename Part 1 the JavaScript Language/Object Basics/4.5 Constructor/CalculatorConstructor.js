/*
    Create a constructor for a Calculator object
    that returns 3 methods: read, sum, and mul
*/

function Calculator() {

    this.read = function() {
        this.a = +prompt("Enter a", 0);
        this.b = +prompt("Enter b", 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };

}