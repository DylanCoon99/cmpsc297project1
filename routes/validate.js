function validate(app){
        
    app.get("/validate", function(request, response){
        
        let isValid = global.blockchain.isChainValid();

        let responseStr = "";

        if(isValid){
            
            reponseStr = "The blockchain is valid!";
       
       } else{
            
            responseStr = "The blockchain is invalid!";
       
       }

       //send the response

        response

            .status(200)
            .send(responseStr);
    });
}

module.exports = validate;
