require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: '.env' })


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/nF8TiEYY3ZAeMXJY9OPien6FJf72X5fd",
      accounts: ["7d158265750d1e3e469a72fb9aca51c73c2c783d908e019455ad783099f0cedf"]
    }
  }
};
