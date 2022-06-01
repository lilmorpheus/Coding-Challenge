const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Enter Your Prime Number> ', number => {
    console.log(`Number ${number}`)

    /* START */
    var prime = true;
    var num = parseInt(number)
    for (var i = num-1; i > 1; i--) {
        console.log(`${num} % ${i}`)
        if (num % i == 0) prime = false;
    }
    /* END */
    if(prime) console.log('\n PRIME')
    readline.close();
})