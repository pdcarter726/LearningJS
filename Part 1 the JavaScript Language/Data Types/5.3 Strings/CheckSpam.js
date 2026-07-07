function checkSpam(str) {
    if(!str) return false;

    if(str.toUpperCase.includes(VIAGRA) || str.toUpperCase.includes(XXX)) return true;

    return false;

}