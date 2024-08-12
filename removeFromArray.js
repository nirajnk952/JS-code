function removeFromArray(arr, ...elements) {
    return arr.filter(item => !elements.includes(item));
}

// Example :

console.log(removeFromArray([1, 2, 3, 4], 3, 2)); 


// Output: [1, 4]
