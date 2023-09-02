function solution(myStr) {
    const array = myStr.split(/[a|b|c]/).filter(v => v);
    return array.length ? array : ["EMPTY"]
}