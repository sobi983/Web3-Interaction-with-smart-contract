const Web3 =  require("web3")
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
const abi = require("./contract.json")

//In this file web3 interaction with the smart contract and to get balance of the account, converting wei into ether or ether into wei has done.
async function balance(){
    //get balance of the address
    // let y =  await web3.eth.getBalance("0x052c6a0006D9870Aa238b0376E108F30A733dED5")  
    //convert wei to ether
    // let e = await web3.utils.fromWei(y ,'ether')
    //send transaction from one account to another in genache
    // await web3.eth.sendTransaction({from:"0x7883E9Bbef63Ad1Ac32762A87d9246ef16f6C644", to:"0x895E8287D301d04147A330275Ad54f7Ba126E073", value: web3.utils.toWei("3","ether")})
    
    

    //interaaction with the contract using web3.js
    let contract = new web3.eth.Contract(abi,"0x401678d840e21ED8c2E6b21a7eF57443b272D2d8" )
    contract.methods.setAge("10").send({from:"0x052c6a0006D9870Aa238b0376E108F30A733dED5"}) // the address of the metamask that is interacting with the contract
    var value = await contract.methods.age().call()
    console.log(value)
}

balance()
