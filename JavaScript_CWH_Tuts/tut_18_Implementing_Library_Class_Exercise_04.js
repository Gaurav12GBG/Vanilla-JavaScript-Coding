console.log("Exercise 04");
/* 
Create a class library and implement the following :
constructor must take the book list as an argument
getBookList();
issuebook(bookName, User);
returnbook(bookName);

*/

//solution

class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = [];
    }

    getBookList(){

        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user){
        if(this.issuedBooks[bookname] == undefined){

            this.issuedBooks[bookname] = user;
        }
        else{
            console.log("The book is already issued!");
        }
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}