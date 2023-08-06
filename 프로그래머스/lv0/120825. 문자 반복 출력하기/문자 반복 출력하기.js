function solution(my_string, n) {
    let answer = [];
    let arr = my_string.split('');
    for(let i = 0 ; i < arr.length ; i++) {
       answer[i] = arr[i].repeat(n);
    }
    return answer.join('');
}