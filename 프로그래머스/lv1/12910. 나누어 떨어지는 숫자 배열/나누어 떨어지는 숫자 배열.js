function solution(arr, divisor) {
    const arr2 = arr.filter(v => v % divisor === 0)

    if (arr2.length !== 0) {
        return arr2.sort((a, b) => a - b)
    } else if (arr2.length === 0) {
        arr2.push(-1)
        return arr2
    }
}