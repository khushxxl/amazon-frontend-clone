import Image from 'next/image'
import React from 'react'

const Laptop = () => {
  return (
    <div className="bg-white shadow-xl mt-10 mb-10 mr-10 ml-10 pt-10 pb-10  rounded-lg">
      <p className="text-xl font-bold ml-10">Today's Deals</p>

      <div className=" flex flex-col space-y-10 lg:space-y-0 lg:flex-row  mt-4 justify-evenly items-center">
        <div>
          <Image
            src={require('../images/iphone.jpg')}
            height={150}
            width={100}
          />
        </div>
        <div>
          <Image src={require('../images/lap1.jpg')} height={150} width={200} />
        </div>
        <div>
          <Image src={require('../images/lap2.jpg')} height={150} width={200} />
        </div>
        <div>
          <Image src={require('../images/lap3.jpg')} height={150} width={200} />
        </div>
        <div>
          <Image src={require('../images/lap2.jpg')} height={150} width={200} />
        </div>
        <div>
          <Image src={require('../images/lap3.jpg')} height={150} width={200} />
        </div>
      </div>
    </div>
  )
}

export default Laptop
