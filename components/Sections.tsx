import React from 'react'
import { useContext } from 'react'
import AmazonContext from '../context/AmazonContext.js'
import Section from './Section.jsx'
import SignInBox from './SignInBox'

const Sections = () => {
  const { products } = useContext(AmazonContext)
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

      {/* <SignInBox /> */}
    </div>
  )
}

export default Sections
