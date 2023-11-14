let arr = [3, 3, 3, 3, 3, 3, 5];
let nums = true
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        nums = false
        break
    }
}
console.log(nums)
