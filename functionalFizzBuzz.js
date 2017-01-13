
console.log((function FizzBuzz(i) {
    return i ? FizzBuzz(i - 1).concat(i) : []
})(20).map(
    function (n) {
        return n % 3 ? (n % 5 ? n : "Buzz") : (n % 5 ? "Fizz" : "FizzBuzz")
    }
).join(' / '))

// is it dividable by 3?
// condition if not dividable by 3, check perhaps dividable by 5? If not, type number. If yes type "Buzz"
// condition if dividable to 3
// if not dividable to 5, give "Fizz", if yes give "Fizzbuzz"
