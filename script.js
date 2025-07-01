function Book(title, author, qtyPages, haveRead) {
    if (!new.target) {
        throw Error("did not use 'new' operator");
    }
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.qtyPages = qtyPages;
    this.haveRead = haveRead;
    this.info = function() {
        if (!this.haveRead) {
            return `${this.title} by ${this.author}, ${this.qtyPages}, not yet read`;
        }

        return `${this.title} by ${this.author}, ${this.qtyPages}, read`;
    }
}

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 295, false);
const warAndPeace = new Book('War and Peace', 'Tolstoy', 875, true);
const catInTheHat = new Book('Cat in the Hat','Dr. Seuss', 23, true);
const noTreason = new Book('No Treason', 'Spooner', 69, false);