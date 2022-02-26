function mine(app){
    
    app.get("/mine", (request, response) => {
        
        //adding a block to the chain calls the mine function

        global.blockchain.addBlock();

        //clear the transactions

        global.transactions = [];

        //send success response

        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;

        response.status(200).send(msg);

    });
}


module.exports = mine;
