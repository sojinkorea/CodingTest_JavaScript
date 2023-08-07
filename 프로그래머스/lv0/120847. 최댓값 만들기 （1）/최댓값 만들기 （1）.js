// function solution(numbers) {
//     let arr = numbers.sort((a, b) => b - a);
//     return arr[0] * arr[1];
// }

//sort는 원본 배열이 정렬된다.

function solution(numbers) {
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
}