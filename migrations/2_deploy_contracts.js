const Dai = artifacts.require("Dai.sol");
const PaymentProcessor = artifacts.require('PaymentProcessor.sol');


module.exports = async function (deployer, network, addresses) {
  const [admin, payer, _] = addresses; 
  console.log(admin, "admin address"); 
  console.log(payer, "payer address");

  if(network === 'develop'){
      await deployer.deploy(Dai);
      const dai = await Dai.deployed();
      await dai.faucet(payer, web3.utils.toWei('100'));
      await deployer.deploy(PaymentProcessor, admin, dai.address);

  }else {
    await deployer.deploy(Dai);
      const dai = await Dai.deployed();
      await dai.faucet(payer, web3.utils.toWei('100'));
      const ADMIN_ADDRESS = admin;
      const DAI_ADDRESS = payer;
      await deployer.deploy(PaymentProcessor, ADMIN_ADDRESS, dai.address);
  }
};
