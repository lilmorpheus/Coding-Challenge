const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Enter Your Prime Number> ', number => {
    console.log(`Number ${number}`)

    /* START */
    var factors = [];
    var num = parseInt(number)
    for (var i = num-1; i > 1; i--) {
        if (num % i == 0) factors.push(i);
    }

    if(factors.length > 0) {
        console.log(factors)
    } else {
        console.log('\n PRIME')
    }
    /* END */
    readline.close();
})