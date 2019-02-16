pragma solidity 0.5.0;

contract SimpleDemo {
  address buyerAddr;
  address payable sellerAddr;
  uint price;

  constructor(uint _integer) public {
    price = _integer;
  }
  function buyItem() public payable {
    buyerAddr = msg.sender;
    require(msg.value == price);
  }
  function transferFunds() public {
    buyerAddr = msg.sender;
    address(sellerAddr).transfer(price);
  }
}
