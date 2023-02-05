
//Constructor...
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}


//Display Constructor...
function Display() {

}


//Add methods to display prototype...
Display.prototype.add = function(book) {

    let tableBody = document.getElementById('tableBody');
    let uiString = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>
    `;
    tableBody.innerHTML += uiString;
};


//implement the clear function...
Display.prototype.clear = function() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};


//implement the validate function...
Display.prototype.validate = function(book) {
    if(book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }
};


//implement show function..
Display.prototype.show = function(type, msg) {
    let alertMsg = document.getElementById('alertMsg');
    alertMsg.innerHTML = `
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong>${msg}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    setTimeout(() => {
    alertMsg.innerHTML = ``;
    }, 2000)
    
};


//Add submit eventListener to form...
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let fiction = document.getElementById('fiction');
    let horror = document.getElementById('horror');
    let programming = document.getElementById('programming');

    let type;
    if(fiction.checked) {
        type = fiction.value;
    } else if(horror.checked) {
        type = horror.value;
    } else {
        type = programming.value;
    }

    let book = new Book(name, author, type);
    let display = new Display();
    if(display.validate(book) == true) {
        display.add(book);
        display.clear();
        display.show('success', "Success! your book has been added.");
    } else {
        display.show('danger', "Error! you cannot add this book.");
    }

    e.preventDefault();
}




