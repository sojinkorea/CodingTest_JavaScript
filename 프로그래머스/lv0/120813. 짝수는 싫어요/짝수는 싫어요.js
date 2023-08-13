function solution(n) {
    const answer = [];
    // for (i = 1; i <= n; i++) {
    //     if (i % 2 === 1) {
    //         answer.push(i);
    //     }
    // }
    
    for (i = 1; i <= n; i += 2) {
        answer.push(i);
    }
    return answer;
}