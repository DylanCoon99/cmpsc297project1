const Transaction = require("../src/transaction");


function listtransactions(app){

    app.get("/listtransactions", function(request, response){
        
        let txStr = "";

        //iterate through transactions and make a response string

        for(let i = 0; i < global.transactions.length; i++){
            txStr += global.transactions[i].prettify();
        }

        //send the response

        response
            
            .status(200)
            .send(txStr);
    });
}

module.exports = listtransactions;
