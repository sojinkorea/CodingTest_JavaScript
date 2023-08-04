function solution(numbers) {
    var sum = 0;
    for (i = 0 ; i <= numbers.length-1 ; i++) {
        sum += numbers[i];
        }
    var answer = sum/numbers.length;
    return answer;
}