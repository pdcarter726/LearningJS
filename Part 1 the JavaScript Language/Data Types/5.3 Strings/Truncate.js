function truncate(str, maxLength) {
    let length = str.length;
    if(length < maxLength) return str;

    let newString = str.slice(0, maxLength - 1);
    newString += "…";

    return newString;
}