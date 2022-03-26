import React from 'react'
import { useContext } from 'react'
import AmazonContext from '../context/AmazonContext.js'
import Section from './Section.jsx'
import SignInBox from './SignInBox.jsx'

const Sections = () => {
  const { products, currentAccount } = useContext(AmazonContext)
  if (currentAccount) {
    return (
      <div className="grid grid-cols-1 -mt-2 gap-y-10 items-center place-content-center place-items-center md:grid-cols-4">
        {products
          .slice(0)
          .reverse()
          .map(
            (product: {
              desc: string
              price: any
              title: string
              productId: any
              delivered: boolean
              seller: string
              buyer: string
            }) => {
              return (
                <div className="">
                  <Section
                    img={product.desc}
                    price={product.price.toString() / 10 ** 18}
                    title={product.title}
                    productId={product.productId.toString()}
                    myBool={product.delivered}
                    seller={product.seller.toString()}
                    buyer={product.buyer}
                  />
                </div>
              )
            }
          )}
      </div>
    )
  } else if (!currentAccount) {
    return (
      <div className="flex items-center flex-col">
        <p className="lg:hidden font-bold">
          Please View on Desktop For Full Functionality
        </p>
        <p>Connect Wallet To Continue</p>
        <SignInBox img={''} />
      </div>
    )
  }
}

export default Sections
