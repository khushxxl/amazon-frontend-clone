const main = async () => {
  const Ecommerce = await hre.ethers
    .getContractFactory('Ecommerce')
    .catch((e) => console.log(e))
  const ecom = await Ecommerce.deploy().catch((e) => console.log(e))

  await ecom.deployed()

  console.log('Ecommerce deployed to:', ecom.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

runMain()
