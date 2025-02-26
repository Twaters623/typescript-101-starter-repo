function FizzBuzz(n) {
    var stringArr = [];
    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            stringArr.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            stringArr.push("Fizz");
        }
        else if (i % 5 === 0) {
            stringArr.push("Buzz");
        }
        else {
            stringArr.push(i.toString());
        }
    }
    return stringArr;
}
console.log(FizzBuzz(100));
