function sumInput() {
    let input = [];
    
    while(true) {
        let a = prompt("Enter number", 0);

        if(a === '' || a === null || !isFinite(a)) break;

        input.push(+a);
    }

    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum;

}

alert( sumInput() );
