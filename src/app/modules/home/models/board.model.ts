import { LoopWordPipe } from "src/app/shared/pipes/loop-word/loop-word.pipe";

enum Status {
    Init = 1,
    Process = 2,
    Lose = 3,
    Win = 4,
}
export class Board {
    word: string;
    totalAttempts: number;
    attempts: Attempt[];
    status: Status;
    constructor(word: string) {
        this.word = word;
        this.totalAttempts = this.word.length;
        this.attempts = [];
        this.status = Status.Init;
    }

    addAttempt(intent: string) {
        if (this.attempts.length >= this.totalAttempts) {
            this.status = Status.Lose;
            return;
        };
        let attempt = new Attempt(intent);
        this.attempts.push(attempt);
        if (intent == this.word) {
            this.status = Status.Win;
        }
    }
}

export class Attempt {
    letters: string[];
    constructor(intent: string) {
        this.letters = new LoopWordPipe().transform(intent);
    }
}
