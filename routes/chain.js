function chain(app){
    
    app.get("/chain", function(request, response){
        
        //get string representation of the chain

        let chainStr = global.blockchain.prettify();

        response
            
            .status(200)
            .send(chainStr);

    });
}

module.exports = chain;
