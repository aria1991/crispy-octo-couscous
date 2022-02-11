async function main() {
    const my_first_contract = await ethers.getContractFactory("my_first_contract");

    // Start deployment, returning a promise that resolves to a contract object
    const welcome = await my_first_contract.deploy("welcome to the chain!");
    console.log("contract deployed to address:", welcome.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });