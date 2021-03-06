const R = require('ramda');

function isEven(number) {
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
}

function positive(number) {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}

function isOdd(number) {
    // Implementar
    const n = R.clone(number);
    n.odd = n.value % 2 != 0;
    return n; 
}

function negative(number) {
    // Implementar
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
}

function isZero(number) {
    // Implementar
    const n = R.clone(number);
    n.zero = n.value == 0;
    return n;
}

function isPrime(number) {
    // Implementar
    const n = R.clone(number);
    if (n.value != 1) {
        for (var i = 2; i < n.value; i++)
            if (n.value % i == 0){
                n.prime = false;
                return n;
            }
    else 
        n.prime = true;
        return n;
    }
}

function mapToNumberObject(num) {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

// ExercÃ­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()
const array = arr.map((number) => mapToNumberObject(number));

// ExercÃ­cio 2: seguindo o modelo das 2 primeiras funÃ§Ãµes implemente as outras 4 funÃ§Ãµes

// ExercÃ­cio 3: refatore todas as funÃ§Ãµes para a forma usando arrow function (=>)

// ExercÃ­cio 4: use R.pipe para compor as funÃ§Ãµes: isEven, positive, isOdd, negative, 
    // isZero, e isPrime. Teste a funÃ§Ã£o composta com um Ãºnico objeto.

// ExercÃ­cio 5: use a funÃ§Ã£o composta do Ex. 4 para transformar os nÃºmeros em 'arr'