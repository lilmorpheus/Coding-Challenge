var num_input = document.getElementById('num_input');

var isPrime = document.getElementById('isPrime')
var notPrime = document.getElementById('notPrime')

//reset();

num_input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        reset();
        var num = isNumber(num_input.value);
        if (num) {
            isThisPrime(num);
        }
    }
})

function isNumber(number) {
    /* Verfication */
    var val = parseInt(number);
    if (!val) {
        alert("Numbers are Required")
        return null;
    }
    if (number % 1 != 0 ) {
        alert("Whole Integers Required")
        return null
    }
    return val;
}

function isThisPrime(number) { 
    /* START */
    var factors = [];
    var num = parseInt(number)
    for (var i = num-1; i > 1; i--) {
        if (num % i == 0) factors.push(i);
    }

    if(factors.length > 0) {
        console.log(factors)
        console.log(factors.join())
        document.getElementById('factors').innerHTML = factors.join(', ');
        console.log(document.getElementById('factors').innerHTML)
        notPrime.style.display = 'block';
    } else {
        console.log('\n PRIME')
        isPrime.style.display = 'block';
    }
    /* END */
}

function reset() {
    notPrime.style.display = 'none';
    isPrime.style.display = 'none';
}