const fibonacci = function(member) {
if (member<0) {
    return "OOPS";
}

    let cur = 0;
    let prev = 0;
    let total = 1;
    for (i=0; i<member; i++) {
        prev = cur;
        cur = total;
        total = cur + prev;
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;