function sumToTot(num, arr) {
    arr.push(num) // tot mod!!
    var tot = arr.reduce( (b=0, a) => a + b)
    console.log(tot)
    return arr
}

var his0 = sumToTot(1, [0]) // 1
sumToTot(1, [0])
sumToTot(1, [0])
sumToTot(1, [0])
var his1 = sumToTot(2, [0]) // 1 + 2
var his2 = sumToTot(3, [0]) // 1 + 2 + 3
var his3 = sumToTot(1, [0]) // 1 + 1 + 2 + 3
