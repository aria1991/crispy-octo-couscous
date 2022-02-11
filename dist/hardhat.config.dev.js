"use strict";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//require('dotenv').config();
require('dotenv').config();

require("@nomiclabs/hardhat-ethers");

var _process$env = process.env,
    API_URL = _process$env.API_URL,
    PRIVATE_KEY = _process$env.PRIVATE_KEY;
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};