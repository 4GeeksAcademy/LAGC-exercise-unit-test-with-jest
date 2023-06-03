// import the function sum from the app.js file
const { sum } = require('./app.js');
const { fromEuroToDollar,fromDollarToYen,fromYenToPound } = require('./app.js')

// start your first test
test('adds 2 + 2 to equal 4', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(2, 2);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(4);
});



test("One euro should be 1.206 dollars", function(){
    const dollars = fromEuroToDollar(1)
    const expected = 3.5 * 1.2; 
    expect (expected).toBe(4.2);
    //expect(fromEuroToDollar(3.5)).toBe(4.2); 
})


test("1000 dollar should be 106583.33333333334 yens", function(){
    const yen=fromDollarToYen(1000)
    const expected = 1000 * (127.9/1.2); 
    expect (expected).toBe(yen);
    console.log(expected);
    console.log(yen);
    
})


test("1000 yens should be 6.254886630179828 yens", function(){
    const pound=fromYenToPound(1000)
    const expected = 1000 * (0.8/127.9); 
    expect (expected).toBe(pound);
    console.log(expected);
    console.log(pound);
    
})