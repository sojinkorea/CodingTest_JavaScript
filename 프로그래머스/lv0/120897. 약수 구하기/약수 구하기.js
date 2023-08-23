function solution(n) {
    const array = [];
    const answer = array.sort((a,b) => a - b)
    
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            array.push(i);
        }
    }
    return answer;
}