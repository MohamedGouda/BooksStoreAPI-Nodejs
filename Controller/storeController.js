var store = require('../Model/storeModel');
var queries = require('../DB/queries')
var db_connection = require('../DB/connection')

exports.getStoreList =async  (req, res)=>
{
    try{
        
        var listQuery = queries.storeQueryList.getStoresList_Query ;
        var data = await db_connection.dbQuery(listQuery);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to list the Stores'});
    }
}


exports.saveStore = async (req, res)=>
{
    try{
        var storeName = req.body.storeName;
        var storeCode = req.body.storeCode;
        var createdOn = new Date();
        var createdBy = req.body.createdBy;
        if(!storeName || !storeCode)
            return res.status(400).send("some required data are missed !!!");


        params=[storeName , storeCode , createdOn , createdBy];

        var saveQuery = queries.storeQueryList.saveStore_Query ;

        var data = await db_connection.dbQuery(saveQuery,params);

        return res.status(200).send(JSON.stringify(data));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to save the Store'});
    }
}