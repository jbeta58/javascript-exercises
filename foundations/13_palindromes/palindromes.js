const palindromes = function (phrase) {
    const alphanumerical = 'abcdefghijklmnñopqrstuvwxyz0123456789';
    cleaned = phrase
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
