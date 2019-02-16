// /*global contract, config, it, assert*/
var ethers = require('ethers');
const SimpleDemo = require('Embark/contracts/SimpleDemo');

let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  //deployment: {
  //  accounts: [
  //    // you can configure custom accounts with a custom balance
  //    // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
  //  ]
  //},
  contracts: {
    "SimpleDemo": {
      args: [100]
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("SimpleStorage", function () {
  this.timeout(0);

  it("Big Number Stuff", async function() {
    console.log("whats up?");
  });

  it("Hashing function", async function() {
    let web3Hash = web3.utils.sha3('Hello World');
    let ethersHash = ethers.utils.hashMessage('Hello World');

    let message = 'Hello World';
    let messageBytes = ethers.utils.toUtf8Bytes(message);
    let ethersKeccak = ethers.utils.keccak256(messageBytes); 
    let ether2 = ethers.utils.hashMessage(messageBytes);
    
    console.log(web3Hash, "web3 sha3 hash");
    console.log(ethersHash, "ethers hashMessage on string");
    console.log(ethersKeccak, "ethers keccak256 on messageBytes");
    console.log(ether2, "ethers hash on messageBytes");
  });
})
