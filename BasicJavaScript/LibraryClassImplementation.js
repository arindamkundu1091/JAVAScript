//! Library Class Implementation...
/**
 * Create a class library and implementation the following:
 * constructor must take the book list as an argument
 * getBookList()
 * issueBook(bookname, user)
 * returnBook(bookname)
 */
class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user) {
        if(this.issuedBooks[bookname] != undefined) {
            this.issuedBooks[bookname] = user;
        } else {
            console.log("This book is issued...");
        }
    }

    returnBook(bookname) {
        delete this.issuedBooks[bookname];
    }
}



