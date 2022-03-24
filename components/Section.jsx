import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useContext } from 'react'
import AmazonContext from '../context/AmazonContext'

const Section = ({ img, title, price, productId, myBool, seller, buyer }) => {
  const { ecomContract } = useContext(AmazonContext)
  const shortenAddress = (address) => {
    return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
  }

  return (
    <div className=" p-5  w-fit rounded-md bg-white shadow-xl lg:ml-10  mt-2 flex  justify-center flex-col">
      <div className="space-y mt-5">
        <div className="flex space5 flex-col ">
          <div>
            <Image src={img} height={220} width={400} />
            <p className="text-xl font-bold">{title}</p>
          </div>
          <div className="flex items-center">
            {/* <p className="text-xs font-bold">Price: </p> */}
            <p className="text-xl font-bold"> {price} ETH </p>
          </div>
          {myBool == false && (
            <div
              onClick={async () => {
                try {
                  await ecomContract.buy(productId, { value: price })
                } catch (error) {
                  alert(error.message)
                }
              }}
              className="bg-yellow-400 text-center p-2  cursor-pointer rounded-2xl mt-2"
            >
              <p className="text-sm font-bold">Buy Now </p>
            </div>
          )}

          {buyer != '0x0000000000000000000000000000000000000000' && (
            <div
              onClick={async () => {
                try {
                  await ecomContract.delivery(productId, {
                    gasLimit: '1000000',
                  })
                } catch (error) {
                  alert(error.message)
                }
              }}
              className="bg-yellow-400 text-center p-2  cursor-pointer rounded-2xl mt-2"
            >
              <p className="text-sm font-bold">
                Confirm by clicking here if delivered
              </p>
            </div>
          )}
          {myBool == true && (
            <div
              onClick={async () => {
                await ecomContract.buy(productId, { value: price })
              }}
              className="bg-yellow-500 text-center p-2  cursor-pointer rounded-2xl mt-2"
            >
              <p className="text-sm font-bold">Order Complete ✅ </p>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm text-black cursor-pointer mt-5">
        Sold by : ${shortenAddress(seller)}
      </p>

      <p className="text-sm text-blue-500 cursor-pointer mt-1">See More</p>
    </div>
  )
}

export default Section
