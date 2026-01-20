const removeFromArray = function() {
    let arg = Array.from(arguments);
    let result = arg[0];
    for(let i = 1; i < arg.length; i++) {
        result = result.filter(item => item !== arg[i])
    }
    return(result);
};
    
// Do not edit below this line
module.exports = removeFromArray;
