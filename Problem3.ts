function countWordOccurrences(sentence: string, word: string): number {
    const splitteDWords = sentence.toLowerCase().split(" ");
    const lowerCaseWords = word.toLowerCase();
    let repeatedWords = 0;

    for (let w of splitteDWords) {
        if (w === lowerCaseWords) {
            repeatedWords++;
        }
    }

    return repeatedWords;
}
