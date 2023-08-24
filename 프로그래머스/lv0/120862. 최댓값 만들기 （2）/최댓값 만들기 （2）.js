function solution(numbers) {
    const array = numbers.sort((a, b) => a - b);
    return Math.max(array[0] * array[1], array.at(-1) * array.at(-2))
}