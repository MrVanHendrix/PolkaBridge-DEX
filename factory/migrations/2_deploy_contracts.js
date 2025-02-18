const UniswapV2Pair = artifacts.require("UniswapV2Pair");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function (deployer) {
  // let owner = "0x57866ed63ca5f9744cef9aa270bd1f1dce935831";
  let owner = "0xfEEF5F353aE5022d0cfcD072165cDA284B65772B";
  deployer.deploy(UniswapV2Factory, owner);
  deployer.deploy(UniswapV2Pair);

  // console.log("Factory address is ", factoryAddress);
  // console.log("Pair address is ", pairAddress);
};