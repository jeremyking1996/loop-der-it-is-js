const { TestScheduler } = require('jest');
const Loops = require('./Loops');

test("test for one to ten",()=>{
    //Given
    let loops = new Loops();
    let expected = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n";
    //When
    let actual = loops.oneToTen();
    //Then
    expect(actual).toEqual(expected)
})

test("test for squared numbers", ()=>{
        // Given
        let loops = new Loops();
        let expected =  "1\n4\n9\n16\n25\n36\n49\n64\n81\n100\n";
        // When
        let actual = loops.loopsSquared();
        // Then
        expect(actual).toEqual(expected);
    }
)

test("test for even under", () => {
        // Given
        let loops = new Loops();
        let expected = "2\n4\n6\n8\n10\n12\n14\n16\n18\n";
        // When
        let actual = loops.evenUnder(20)
        // Then
        expect(actual).toEqual(expected);
})

test("test for star pattern", () => {
    // Given
    let loops = new Loops();
    let expected = "*\n**\n***\n****\n*****\n";
    // When
    let actual = loops.starLoop();
    // Then
    expect(actual).toEqual(expected);
})

test("test small multiplication table", () => {
    //Given
    let loops = new Loops();
    let expected = "|1|2|3|4|\n|2|4|6|8|\n|3|6|9|12|\n|4|8|12|16|\n"
    //When
    let actual = loops.squareLoop();
    //Then
    expect(actual).toEqual(expected);
})
test("test big multiplication table", () => {
    //Given
    let loops = new Loops();
    let expected = "|1|2|3|4|5|6|\n|2|4|6|8|10|12|\n|3|6|9|12|15|18|\n|4|8|12|16|20|24|\n|5|10|15|20|25|30|\n|6|12|18|24|30|36|"
    //When
    let actual = loops.bigSquareLoop();
    //Then
    expect(actual).toEqual(expected);
})

