import React, { useState } from 'react'
import { useEffect } from 'react'
import { contractABI, contractAddress } from '../utils/constants.js'
import { ethers } from 'ethers'

export const AmazonContext = React.createContext()

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )
  return transactionContract
}

export const AmazonProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  const [currentAccount, setCurrentAccount] = useState('')

  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  const connectWallet = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      // Prompt user for account connections
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      console.log('Account:', await signer.getAddress())
      setCurrentAccount(await signer.getAddress())
    } catch (error) {
      console.log(error)
    }
  }
  const [ecomContract, setEcomContract] = useState()

  useEffect(async () => {
    connectWallet()
    const EcomContract = await getEthereumContract()
    const productResult = await EcomContract.getProducts().then((result) => {
      return result
    })
    setProducts(productResult)
    setEcomContract(EcomContract)
  }, [])

  return (
    <AmazonContext.Provider
      value={{
        connectWallet,
        currentAccount,
        modal,
        setModal,
        products,
        open,
        setOpen,
        getEthereumContract,
        ecomContract,
      }}
    >
      {children}
    </AmazonContext.Provider>
  )
}

export default AmazonContext
