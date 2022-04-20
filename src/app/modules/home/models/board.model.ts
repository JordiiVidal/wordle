export class Board {
    word: string;
    totalAttempts: number;
    constructor(word: string) {
        this.word = word;
        this.totalAttempts = this.word.length;
    }
}

export class Attempt {
    letters: string[];
    responses: number[];
    constructor() {
        this.letters = [];
        this.responses = [];
    }
}
