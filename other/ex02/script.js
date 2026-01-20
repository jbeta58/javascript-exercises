let arr = [5, 3, 8, 1, 4, 10, 15];

let filtered = filterRange(arr, 1, 4);

alert(filtered);

alert(arr);

function filterRange(numArray, a, b) {
    return numArray
        .filter(
            item => (item >= a && item <= b)
        );
}

