var store = require('../Model/bookModel');
var queries = require('../DB/queries')
var db_connection = require('../DB/connection')

exports.getBooksList =async  (req, res)=>
{
    try{
        
        var listQuery = queries.bookQueryList.getBooksList_Query ;
        var data = await db_connection.dbQuery(listQuery);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to list the Books'});
    }
}


exports.saveBook = async (req, res)=>
{
    try{
        book_title = req.body.title;
        book_description = req.body.description;
        book_auther= req.body.auther;
        book_publisher= req.body.publisher ;
        book_pages= req.body.pages ;
        store_code = req.body.storeCode;
        created_on = new Date();
        created_by = req.body.createdBy;

        if(!book_title || !book_auther || !store_code || !created_by || !book_publisher)
            return res.status(400).send("some required data are missed !!!");


        params=[book_title , book_description , book_auther , book_publisher , book_pages , store_code , created_on , created_by];

        var saveQuery = queries.bookQueryList.savebook_Query ;

        var data = await db_connection.dbQuery(saveQuery,params);

        return res.status(200).send(JSON.stringify(data));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to save the Store'});
    }
}