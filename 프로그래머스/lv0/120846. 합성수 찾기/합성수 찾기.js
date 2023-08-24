function solution(n) {
    let answer = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                sum++;
            }
        }
        if (sum >= 3) {
            answer++;
        }
        sum = 0;
    }
    return answer;
}
