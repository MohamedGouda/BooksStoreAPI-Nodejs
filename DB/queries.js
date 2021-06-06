exports.storeQueryList={
    getStoresList_Query :'SELECT store_id, store_name, store_code, created_on, created_by FROM "BookStore".store;',
    saveStore_Query: 'INSERT INTO "BookStore".store(store_name, store_code, created_on, created_by) VALUES($1, $2, $3, $4);',
}


exports.bookQueryList={
    getBooksList_Query :'SELECT * FROM "BookStore".book;',
    savebook_Query: 'INSERT INTO "BookStore".store(book_title, book_description, book_auther, book_publisher ,book_pages , store_code,created_on,created_by) VALUES($1, $2, $3, $4 ,$5 , $6 ,$7 , $8);',
}