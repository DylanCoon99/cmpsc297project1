//creates a new transaction and adds it to total transactions

const Transaction = require("../src/transaction");


function newtransactions(app){
    
    app.get("/newtransactions", function(request, response){

        //creates new transaction
        
        let tx = new Transaction();

        global.transactions.push(tx);


        //response from creating new transaction

        response

            .status(200)
            .send(tx.prettify());
        
    });
}

module.exports = newtransactions;
