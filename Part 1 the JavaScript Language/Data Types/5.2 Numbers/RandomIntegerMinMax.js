/*
    Create a function that generates a random integer from min to max (inclusive)
*/
function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}