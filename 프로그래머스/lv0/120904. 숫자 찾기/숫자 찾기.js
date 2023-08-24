function solution(num, k) {
    const array = String(num).split('');
    return array.filter(v => v.includes(String(k))).length !== 0 ? array.indexOf(String(k)) + 1 : -1;
}