function solution(arr) {
    if (arr.length > 1) {
        const min = Math.min(...arr)
        arr.splice(arr.indexOf(min), 1)
        return arr
    } else {
        return [-1]
    }
}