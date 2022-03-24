import Image from 'next/image'
import React from 'react'
import { useContext } from 'react'
import AmazonContext from '../context/AmazonContext'

const SignInBox = () => {
  const { connectWallet } = useContext(AmazonContext)
  return (
    <div className="flex items-center flex-col mt-2 ">
      <div className="bg-white shadow-2xl h-fit w-full p-3  ml-2">
        <p className="text-xl font-bold">
          Connect Wallet for your better <br /> experience.
        </p>

        <div
          onClick={connectWallet}
          className="mt-7 bg-yellow-400 p-2 text-center rounded-lg cursor-pointer"
        >
          <p className="text-sm">Connect securely</p>
        </div>
      </div>

      <div className="mt-2">
        <Image src={require('../images/laptopad.jpg')} />
      </div>
    </div>
  )
}

export default SignInBox
