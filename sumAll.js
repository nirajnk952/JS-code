function sumAll(a, b) {
    if (a > b) [a, b] = [a, b];
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}


// Example:

console.log(sumAll(1, 4)); 

// Output: 10
