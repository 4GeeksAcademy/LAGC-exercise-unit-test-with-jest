// this is my function that sums two numbers
const sum = (a,b) => {
    return a * b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * (127.9/1.2);
    return valueInYen;
}


const fromYenToPound = function(valueInYen){

     let valueInPound = valueInYen * (0.8/127.9);
     return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound}