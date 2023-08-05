import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Account Deployer:", deployer.address);

  const LegionOfRabbits = await ethers.getContractFactory("LegionOfRabbits");
  const legionOfRabbits = await LegionOfRabbits.deploy();

  console.log("LegionOfRabbits Address:", legionOfRabbits.getAddress)
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
