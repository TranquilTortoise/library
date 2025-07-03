// Global Constants
const myLibrary = [];
const displayContainer = document.querySelector('.display-container');
const dialog = document.querySelector('.dialog');


// Execution
addBookToLibrary('The Hobbit', 'JRR Tolkien', 295, true);
addBookToLibrary('War and Peace', 'Tolstoy', 875, false);
addBookToLibrary('Cat in the Hat','Dr. Seuss', 23, true);
addBookToLibrary('No Treason: Constitution of No Authority', 'Spooner', 69, false);

    // tie display-lib-btn to displayLibrary function
const displayLibBtn = document.querySelector('.display-lib-btn');
displayLibBtn.addEventListener('click', () => {
    displayLibrary();
});

    // make new-book-button show modal dialog
const newBookBtn = document.querySelector('.new-book-btn');
newBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

    // capture dialog form variables to add a new book to library
const form = document.querySelector('.dialog form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const qtyPages = parseInt(document.getElementById('qty-pages').value);
    const haveRead = document.getElementById('have-read').checked;

    addBookToLibrary(title, author, qtyPages, haveRead);

    form.reset();
    dialog.close();

    if (displayContainer.classList.contains('show')) {
        displayLibrary();
    }
});

//Functions
function Book(title, author, qtyPages, haveRead) {
    if (!new.target) {
        throw Error("did not use 'new' operator");
    }
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.qtyPages = qtyPages;
    this.haveRead = haveRead;

    this.toggleReadStatus = function() {
        this.haveRead = !this.haveRead;
    }
}

function addBookToLibrary(author, title, qtyPages, haveRead) {
    let index = myLibrary.length;
    myLibrary[index] = new Book(author, title, qtyPages, haveRead);
}

function displayLibrary() {

    displayContainer.innerHTML = '';
    displayContainer.classList.add('show');
    
    for (let i = 0; i < myLibrary.length; i++) {

        // create card div
        const card = document.createElement('div');
        card.classList.toggle("card");
        displayContainer.appendChild(card);

        // create title h1
        const title = document.createElement('h1');
        title.classList.toggle("title");
        title.textContent = `${myLibrary[i].title}`;
        card.appendChild(title);

        // create author p
        const author = document.createElement('p');
        author.classList.toggle("author");
        author.textContent = `by ${myLibrary[i].author}`;
        card.appendChild(author);

        // create qtyPages p
        const qtyPages = document.createElement('p');
        qtyPages.classList.toggle("qty-pages");
        qtyPages.textContent = `This book has ${myLibrary[i].qtyPages} pages.`;
        card.appendChild(qtyPages);

        // create changeReadState button
        const changeReadStateBtn = document.createElement('button');
        changeReadStateBtn.classList.toggle("change-read-status-btn");
            // use different text based on read status
        if (myLibrary[i].haveRead === true) {
            changeReadStateBtn.textContent = 'Mark Unread';
        } else if (myLibrary[i].haveRead === false) {
            changeReadStateBtn.textContent = 'Mark Read';
        }
            // tie toggleReadStatus function to button
        changeReadStateBtn.addEventListener('click', () => {
            myLibrary[i].toggleReadStatus();
            displayLibrary();
        })
        card.appendChild(changeReadStateBtn);
    }
}
