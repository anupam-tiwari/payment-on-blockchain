//pragma solidity ^0.6.2; 
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol'; 

contract PaymentProcessor{
    address public admin; 
    IERC20 public dai;
    //address public payer1 = 0x637a7a484cF31C200bBAfbf5f3b5E8fEcD96bD1C; 

    event PaymentDone(
        address payer, 
        uint amount, 
       // uint paymentId, 
        uint date
    );

    event Approval(address indexed tokenOwner, address indexed spender,
 uint tokens);

    constructor(address adminAddress, address daiAddress) public{
        admin = adminAddress; 
        dai = IERC20(daiAddress);
    }

    function pay(uint amount) external{
        //, uint paymentId
        //dai.transferFrom(msg.sender, admin, amount);
        // dai.approve()
        dai.approve(msg.sender, amount);
       // emit Approval(payer1, admin, amount); 
        //dai.transfer(admin, amount);
        dai.transferFrom(msg.sender, admin, amount);
        //emit PaymentDone(msg.sender, amount, block.timestamp);
    } 
}

