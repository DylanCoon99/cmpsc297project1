const Block = require("./block");


class Blockchain{
    
    constructor(){
        //array of all of the blocks in the chain        
        this.chain = [new Block(Array(65).join("0"))];
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    getChainLength(){
        return this.chain.length;
    }

    addBlock(){
        //mine a new block using previous blocks hash

        let newBlock = new Block(this.getLastBlock().hash, global.transactions);
        
        //add immutable block to the chain
        this.chain.push(Object.freeze(newBlock));
    }


    isChainValid(blockchain = this){
        
        for (let i = 1; i < blockchain.chain.length; i++){
            const currentBlock = blockchain.chain[i];

            const prevBlock = blockchain.chain[i - 1];

            //validate the current block's hash from the prev


            if(
                
                currentBlock.hash !== currentBlock.getHash() ||

                prevBlock.hash !== currentBlock.prevHash
            ){
                return false;
            }
        

            let checkString = Array(global.difficulty + 1).join("0");

            if (!currentBlock.hash.startsWith(checkString)){
                return false;
            }

        }

        //otherwise return true --> valid

        return true;
    }

    replaceChain(newChain){

        //check length
        
        if(newChain.length <= this.chain.length) return;
        
        //check if valid

        if(!this.isChainValid(newChain)) return;
        
        //replace chain

        this.chain = newChain;
    }


    //string representation of the blockchain
    
    prettify(){
        
        let chainStr = "";

        for(let i = 0; i < this.chain.length; i++){
            
            chainStr += this.chain[i].prettify();

            chainStr += "<br><hr>";
        }

        return chainStr;

    }
}

module.exports = Blockchain;
