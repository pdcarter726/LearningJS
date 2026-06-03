/*
    Create a function multiplyNumeric that multiplies
    all numeric properties of an object by 2
*/

function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof(object[key]) == "number") {
            object[key] *= 2;
        }
    }
}