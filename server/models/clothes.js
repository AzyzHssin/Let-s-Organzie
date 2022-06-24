const conn = require('../database/index')


module.exports = {
    getAll:function(callback){
        const sql=`select * from clothes`
         conn.query(sql, function (error, results, fields) {
            if(error){

                callback(error,null)
            }
         else{
            callback(null,results)
         }             
                                                              }) 
    }
}