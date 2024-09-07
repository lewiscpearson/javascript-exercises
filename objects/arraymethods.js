// javascript.info/array-methods Translate border-left-width to borderLeftWidth

function camelize (string) {
    return string
        .split("-")
        .map((word, index) => index == 0 ? word : word[0].toUpperCase()+ word.slice(1))
        .join("");
}


// Filter range


