const myLibrary = [];

function Book(title, author, qtyPages, haveRead) {
    if (!new.target) {
        throw Error("did not use 'new' operator");
    }
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.qtyPages = qtyPages;
    this.haveRead = haveRead;
}

function addBookToLibrary(author, title, qtyPages, haveRead) {
    let index = myLibrary.length;
    myLibrary[index] = new Book(author, title, qtyPages, haveRead);
}

addBookToLibrary('The Hobbit', 'JRR Tolkien', 295, false);
addBookToLibrary('War and Peace', 'Tolstoy', 875, true);
addBookToLibrary('Cat in the Hat','Dr. Seuss', 23, true);
addBookToLibrary('No Treason', 'Spooner', 69, false);