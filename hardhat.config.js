require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: `${process.env.CONTRACT_URL}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      gasLimit: 1000000,
    },
  },
}
