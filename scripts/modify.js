const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONT_AD = process.env.CONT_AD;

const { ethers } = require('hardhat');

const contract = require("../artifacts/contracts/my_first_contract.sol/my_first_contract.json");

const alchemyProvider = new ethers.providers.AlchemyProvider('network=ropsten', API_KEY);
// provider 

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
//signer 


const my_first_contractContract = new ethers.Contract(CONT_AD, contract.abi, signer);
async function main() {
    const message = await my_first_contractContract.message();
    console.log("The message is:" + message);

    console.log("Updating the message.....");
    const tx = await my_first_contractContract.updateMessage("Lay back and enjoy the freedom!");
    await tx.wait();

    const newMessage = await my_first_contractContract.message();
    console.log("The new message is:" + newMessage);



}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });