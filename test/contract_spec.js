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
    let web3Hash = web3.utils.sha3('234');
    let ethersHash = ethers.utils.sha3('234');

    let ethersKeccak = ethers.utils.keccak256(0x42);
    
    console.log(web3Hash);
    console.log(ethersHash);
    console.log(ethersKeccak);
  });
})
