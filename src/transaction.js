function generateRandomIPv4(){
    
    let ipv4 = "";


    //create network part 1

    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";

    //create network part 2

    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";


    //create host part 1

    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";


    //create host part 2

    ipv4 += Math.floor(Math.random() * 255) + 1;

    return ipv4
}



function generateRandomMoney(){
    return Math.floor(Math.random() * 1000000);
}


class Transaction {
    
    constructor(fromAddress = "", toAddress = "", amount = 0){
        
        this.fromAddress = generateRandomIPv4();

        this.toAddress = generateRandomIPv4();

        this.amount = generateRandomMoney();

    }


    //returns a neat string of the transaction

    prettify(){
        let txStr = `<div>Host <i>${this.fromAddress}</i> sent <i>${this.toAddress}</i> \$${this.amount}.</div>`;

        return txStr;
    }

}

//export to be used elsewhere

module.exports = Transaction;
