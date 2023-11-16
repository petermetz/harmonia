require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-foundry");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.20",
  optimizer: { enabled: true },
  networks: {
    cacti: {
      url: 'http://127.0.0.1:8545',
      gas: "auto",
      gasPrice: "auto",
      accounts: [
        `c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3`, 
        '8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63', 
        'ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f'
      ],
      from: "627306090abaB3A6e1400e9345bC60c78a8BEf57"
    },
    hardhat: {
      mining: {
        mempool: {
          order: "fifo",
        },
        auto: false,
        interval: 1000,
      },
      chainId: 1337,
    },
  },
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/out"
  },
  foundry: {
    remappings: "./remappings.txt",
  },
};
