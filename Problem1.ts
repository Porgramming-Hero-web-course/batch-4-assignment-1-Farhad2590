function sumArray(array: number[]): number {
    let sum = 0;
    for (const number of array) {
        sum += number;
    }
    return sum;
}