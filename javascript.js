const newBookButton = document.querySelector('.newBookButton');
const libraryTable = document.querySelector('.libraryTable');
const bookForm = document.createElement('form');

const myLibrary = [];
let libraryCount = 0;

newBookButton.addEventListener('click', createForm);

function createForm(){

    newBookButton.disabled = true;

    const bookTitleLabel = document.createElement('label');
    bookTitleLabel.textContent = "Title:"
    bookTitleLabel.htmlFor = 'bookTitle';

    const bookTitle = document.createElement('input');
    bookTitle.id = 'bookTitle';

    const authorLabel = document.createElement('label');
    authorLabel.textContent = "Author:"
    authorLabel.htmlFor = 'author';

    const author = document.createElement('input');
    author.id = 'author';

    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = "Number of Pages:"
    pagesLabel.htmlFor = 'pages';

    const pages = document.createElement('input');
    pages.id = 'pages';

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
    bookForm.appendChild(author);
    bookForm.appendChild(pagesLabel);
    bookForm.appendChild(pages);
    bookForm.appendChild(bookReadLabel);
    bookForm.appendChild(bookRead);
    bookForm.appendChild(submitButton);

    submitButton.addEventListener('click', addBookToLibrary);

    document.body.appendChild(bookForm);
}

function Book(){

}

function addBookToLibrary(){
    let newLibraryRow = document.createElement('tr');

    let bookName = document.createElement('td');
    bookName.textContent = bookTitle.value;

    let authorName = document.createElement('td');
    authorName.textContent = author.value;

    let pageNumber = document.createElement('td');
    pageNumber.textContent = pages.value;

    let isBookRead = document.createElement('td');
    if(bookRead.checked == true)
        isBookRead.textContent = 'Y';
    else   
        isBookRead.textContent = 'N';

    newLibraryRow.appendChild(bookName);
    newLibraryRow.appendChild(authorName);
    newLibraryRow.appendChild(pageNumber);
    newLibraryRow.appendChild(isBookRead);

    libraryTable.appendChild(newLibraryRow);

    while(bookForm.firstChild)
    {
        bookForm.removeChild(bookForm.firstChild);
    }
    document.body.removeChild(bookForm);
    newBookButton.disabled = false;
}