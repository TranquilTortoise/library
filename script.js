function Book(title, author, qtyPages, haveRead) {
    if (!new.target) {
        throw Error("did not use 'new' operator");
    }
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

console.log(theHobbit.info());
console.log(warAndPeace.info());