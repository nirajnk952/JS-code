function leapYears(year) {
    if (year % 4 !== 0) return false;
    if (year % 100 === 0 && year % 400 !== 0) return false;
    return true;
}

// Example usage:

console.log(leapYears(2024));

// Output: true


console.log(leapYears(2023));

// Output: false
