module.Book = class Book{
    constructor(bookId , bookTitle  , bookDescription , bookPublisher , bookAuthar , bookPages , bookStoreId , created_by , created_on ){
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookDescription = bookDescription;
        this.bookPublisher = bookPublisher;
        this.bookAuthar = bookAuthar;
        this.bookPages = bookPages;
        this.bookStoreId = bookStoreId;
        
        this.created_by = created_by;
        this.created_on = created_on;
    }
}