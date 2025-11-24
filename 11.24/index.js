function Delitsali(n) {
    if (n % 3 === 0 && n % 7 === 0) {
    return "Delitsa na 7 i 3 ";
    } 
    else 
    return "Ne delitsa na 7 i 3 "; 
}
//console.log(Delitsali(19)); // "Delitsa na 7 i 3 "

function countOdd(n, m) {
    let count = 0;
    for (let i = n; i <= m; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }
    return count;
}

function countOdd(n, m) {
    let sum=0;
    for (let i = n; i <= m; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return count;
}

function checkPrime(n) {
    if (n <= 1) return "Не простое";

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return "Составное";
        }
    }
    return "Простое";
}
//console.log(checkPrime(29)); // "Простое"

function sumcetnix(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumcetnix([1, 2, 3, 4, 5, 6])); // 12

function sumcetnixkvadratov(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result = result + (arr[i] * arr[i]);
        }
    }
    return result;
}
//console.log(sumcetnixkvadratov([1, 2, 3, 4])); // 20

function sumRange(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Оба параметра должны быть числами";
    }

    let start = Math.min(a, b);
    let end = Math.max(a, b);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
