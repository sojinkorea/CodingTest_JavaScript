function solution(myStr) {
    const array = myStr.split(/[abc]/g).filter(v => v);
    return array.length ? array : ["EMPTY"]
}