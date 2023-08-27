function solution(emergency) {
    const array = emergency.slice().sort((a, b) => b - a);
    return emergency.map((v) => array.indexOf(v) + 1);
}