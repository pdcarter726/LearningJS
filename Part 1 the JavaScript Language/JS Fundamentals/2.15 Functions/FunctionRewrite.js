/*
    Rewrite this function to a single line.

    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return confirm('Did parents allow you?');
        }
    }

    One variant with ? another with ||
*/

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did your parents allow you?');
}