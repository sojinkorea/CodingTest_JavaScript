function solution(my_string) {
    return my_string.split('').filter(v => Number(v)).reduce((a, c) => a + Number(c), 0)
}