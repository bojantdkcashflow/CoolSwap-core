const SwapFactory = artifacts.require("SwapFactory");

const adminAddress = "0x852Cf8A03c30c50174f091B9438C4914a6dC3A8a";
const feeCollectingAddress = "0x852Cf8A03c30c50174f091B9438C4914a6dC3A8a";

module.exports = async (deployer) => {
  await deployer.deploy(SwapFactory, adminAddress);

  const contract = await SwapFactory.deployed();

  await contract.setFeeTo(feeCollectingAddress);
};
