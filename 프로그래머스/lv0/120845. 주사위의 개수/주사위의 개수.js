function solution(box, n) {
    // return box.map(v => Math.floor(v / n)).reduce((a, c) => a * c);
    return box.reduce((a, c) => a * Math.floor(c / n), 1);
}