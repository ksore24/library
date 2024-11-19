let library = [];
let bookNumber = 0;
const newBookButton = document.querySelector('.newBookButton');
const libraryTable = document.querySelector('.libraryTable');
const bookForm = document.createElement('form');
newBookButton.addEventListener('click', createForm);

function createForm(){

    newBookButton.disabled = true;

    const bookTitleLabel = document.createElement('label');
    bookTitleLabel.textContent = "Title:";
    bookTitleLabel.htmlFor = 'bookTitle';

    const bookTitle = document.createElement('input');
    bookTitle.id = 'bookTitle';

    const authorLabel = document.createElement('label');
    authorLabel.textContent = "Author:"
    authorLabel.htmlFor = 'authorNamed';

    const authorNamed = document.createElement('input');
    authorNamed.id = 'authorNamed';

    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = "Number of Pages:"
    pagesLabel.htmlFor = 'pagesNumber';

    const pagesNumber = document.createElement('input');
    pagesNumber.id = 'pagesNumber';

    const bookReadLabel = document.createElement('label');
    bookReadLabel.textContent = "Book has been read?:"
    bookReadLabel.htmlFor = 'bookRead';

    const bookRead = document.createElement('input');
    bookRead.type = 'checkbox';
    bookRead.id = 'bookRead';

    const submitButton = document.createElement('button');
    submitButton.textContent = "Add To Library";

    bookForm.addEventListener('submit', (event) =>
    {
        event.preventDefault();
    }
    )

    bookForm.appendChild(bookTitleLabel);
    bookForm.appendChild(bookTitle);
    bookForm.appendChild(authorLabel);
    bookForm.appendChild(authorNamed);
    bookForm.appendChild(pagesLabel);
    bookForm.appendChild(pagesNumber);
    bookForm.appendChild(bookReadLabel);
    bookForm.appendChild(bookRead);
    bookForm.appendChild(submitButton);

    submitButton.addEventListener('click', addBookToLibrary);

    document.body.appendChild(bookForm);
}

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){

    book = new Book(bookTitle.value, authorNamed.value, pagesNumber.value, bookRead.checked);

    let newLibraryRow = document.createElement('tr');
    newLibraryRow.dataset.index = bookNumber;

    let bookName = document.createElement('td');
    bookName.textContent = book.title;

    let authorName = document.createElement('td');
    authorName.textContent = book.author;

    let pageNumber = document.createElement('td');
    pageNumber.textContent = book.pages;

    let isBookRead = document.createElement('td');
    isBookRead.dataset.index2 = bookNumber;
    if(book.read)
        isBookRead.textContent = 'Y';
    else   
        isBookRead.textContent = 'N';

    let finalColumn = document.createElement('td');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "delete";
    deleteButton.dataset.index = bookNumber;

    let readButton = document.createElement('button');
    readButton.textContent = "change read status";
    readButton.dataset.index = bookNumber;

    finalColumn.appendChild(deleteButton);
    finalColumn.appendChild(readButton);

    deleteButton.addEventListener('click', deleteBook);
    readButton.addEventListener('click', changeReadStatus);

    library[bookNumber] = book;
    bookNumber++;

    newLibraryRow.appendChild(bookName);
    newLibraryRow.appendChild(authorName);
    newLibraryRow.appendChild(pageNumber);
    newLibraryRow.appendChild(isBookRead);
    newLibraryRow.appendChild(finalColumn);

    libraryTable.appendChild(newLibraryRow);

    while(bookForm.firstChild)
    {
        bookForm.removeChild(bookForm.firstChild);
    }
    document.body.removeChild(bookForm);
    newBookButton.disabled = false;
}

function deleteBook(){
    let tempIndex = this.dataset.index;
    const tempElement = document.querySelector(
        `[data-index='${tempIndex}']`);
    tempElement.remove();
    library.splice(tempIndex, 1);
}

function changeReadStatus(){
    let tempIndex2 = this.dataset.index;
    const tempElement2 = document.querySelector(`[data-index2='${tempIndex2}']`);
    if(tempElement2.textContent == 'Y')
    {
        tempElement2.textContent = 'N';
        library[tempIndex2].read = false;
    }
    else if(tempElement2.textContent == 'N')
        {
            tempElement2.textContent = 'Y';
            library[tempIndex2].read = true;
        }
}