camelize("list-style-image");
camelize("background-color");
camelize("-webkit-transition");

function camelize (string) {
    let answer = string
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
    
    console.log(answer);
}




