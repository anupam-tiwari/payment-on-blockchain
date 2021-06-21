const paymentprocessor = artifacts.require("paymentprocessor");
const Dai = artifacts.require("Dai"); 


/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */ //account 
contract("paymentprocessor", accounts =>  {
  it("should deploy payment paymentprocessor", async () => {
    const paymentProcessor = await paymentprocessor.deployed();
    assert( paymentProcessor.address !== '');
  });

  it("should deploy Dai processor", async () => {
    const dai = await Dai.deployed();
    //console.log(dai);
    assert(dai.address !== '');
  });

  it("Fake Dai should be sent to the payer address", async () => {
    const dai = await Dai.deployed(); 
    //const beforetransfer = await dai.balanceOf('0x041b4225063e180f6a25e24fa31bb6c31937eb4d'); 
    //console.log(beforetransfer.toString()); 
    //const aftertransfer = await dai.balanceOf('0x637a7a484cF31C200bBAfbf5f3b5E8fEcD96bD1C'); 
    const aftertransfer = await dai.balanceOf(accounts[1]); 
    console.log(aftertransfer.toString()); 
    assert(aftertransfer.toString() === web3.utils.toWei('1000'));
  }); 


  // it("Dai should be transfered from Payer to Admin address", async () => {
  //   // const amount = 1; 
  //   const dai = await Dai.deployed(); 
  //   // const paymentProcessor = await paymentprocessor.deployed(); 
  //   // const account1  = await dai.balanceOf(accounts[0])
  //   // console.log(account1.toString()); 
  //    const account2  = await dai.balanceOf(accounts[1])
  //    console.log(account2.toString()); 

  //   //await dai.approve(accounts[1], account2);
    
  //   // console.log(account1.toString()); 
    
  //   // console.log(account2.toString()); 
  //   // console.log(dai.balances[account[1]]);
    
  //   const paymentProcessor = await paymentprocessor.deployed(); 
  //   const amount = web3.utils.toWei("1", "wei"); 
  //   const amount_string = amount.toString()
  //   await paymentProcessor.pay(amount_string); 
    

  //   //await dai.transfer(accounts[1],web3.utils.toWei('1'));

  //   //await paymentProcessor.pay(1); 
  //   // const aftertransfer = await dai.balanceOf(accounts[0]); 
  //   // console.log(aftertransfer.toString()); 
    
  // }); 
  
});
