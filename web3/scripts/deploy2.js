// const hre = require("hardhat");

// async function main() {
//   // Deploy the contract with an initial argument if needed
//   const Marketplace = await hre.ethers.getContractFactory("Marketplace");
//   const deployedContract = await Marketplace.deploy(1); // Assuming '1' is the correct argument

//   // Wait for the deployment to be completed
//   // await deployedContract.deployed();
//   console.log(`contract deployed to ${deployedContract.target}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

// ---------------------------------------------------------------------------------------------

const hre = require("hardhat");

async function main() {
  // Get the contract to deploy
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");

  // Set the fee percentage (for example, 3%)
  const feePercent = 6;

  // Deploy the contract
  const marketplace = await Marketplace.deploy(feePercent);

  // Wait for the deployment to be confirmed
 // This line is actually not necessary anymore

  // Log the address of the deployed contract
  console.log(`contract deployed to ${marketplace.target}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
