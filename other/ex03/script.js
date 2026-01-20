let arrNum = [5, 3, 8, 1, 4, 10, 15];

filterRangeInPlace(arrNum, 1, 4);

alert(arrNum);

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

