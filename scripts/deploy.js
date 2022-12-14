const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  //get the signer that we will use to deploy
  const [deployer] = await ethers.getSigners();
const Marketplace = await hre.ethers.getContractFactory("NFTMarketplace");
const marketplace = await Marketplace.deploy();

await marketplace.deployed();


console.log("NFT Contract Address: ", marketplace.address);
}


main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});