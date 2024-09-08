const palindromes = function (str) {
    str = str.replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, "").toLowerCase();

    return str === Array.from(str).reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;


// palindromes('A car, a man, a maraca.')
