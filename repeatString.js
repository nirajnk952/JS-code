function repeatString(str, num) {
    if (num < 0) return '';
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

// Example
console.log(repeatString('Niraj', 2)); 

// Output: "NirajNiraj"
