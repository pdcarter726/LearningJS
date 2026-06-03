/*
    Create an accumulator constructor Accumulator(startingValue). 
    The starting value should be stored in value. There should be a method
    accumulator.read() that prompts the user for a value, and adds it
    to the current value in the accumulator
*/

function Accumulator(startingValue) {

    this.value = startingValue;
    this.read = function() {
        value += +prompt("Enter value to add", 0);
    }

}