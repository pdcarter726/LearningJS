/*
    Write a function isEmpty(obj) which returns true if
    the object has no properties, false otherwise
*/

function isEmpty(obj) {

    let flag = true;
    for(let key in object) {
        flag = false;
        break;
    }
    return flag;
}