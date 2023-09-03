function solution(n) {
    return String(n).split('').map(v => Number(v)).reduce((a, c) => a + c, 0)
}