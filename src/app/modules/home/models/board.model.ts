import { LoopWordPipe } from "src/app/shared/pipes/loop-word/loop-word.pipe";

enum Status {
    Init = 1,
    Process = 2,
    Lose = 3,
    Win = 4,
}
export class Board {
    word: string = '';
    totalAttempts: number;
    attempts: Attempt[];
    status: Status;

    constructor() {
        this.word = '';
        this.totalAttempts = this.word.length;
        this.attempts = [];
        this.status = Status.Init;
    }

    setWord(word: string) {
        this.word = word;
        this.totalAttempts = this.word.length;

    }

    addAttempt(intent: string) {
        if (intent.length != this.word.length) return;
        if (this.status == Status.Win) return;
        if (this.attempts.length >= this.totalAttempts) {
            this.status = Status.Lose;
            return;
        };
        let attempt = new Attempt(intent);
        this.attempts.push(attempt);
        if (intent.toUpperCase() == this.word.toUpperCase()) {
            this.status = Status.Win;
        }
    }

    restart() {
        this.attempts = [];
        this.status = Status.Init;
    }
}

export class Attempt {
    letters: string[];
    constructor(intent: string) {
        this.letters = new LoopWordPipe().transform(intent);
    }
}
