const fibonacci = function(n) {
    let count;
    if (typeof n !== 'number') {
        count = parseInt(n);
    } else {
        count = n;
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    
    let curr = 1;
    let next = 1;
    let temp = 0;
    for (let i = 2; i < count; i++) {
        temp = next;
        next = curr + next;
        curr = temp;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
