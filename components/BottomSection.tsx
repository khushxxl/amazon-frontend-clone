import Image from 'next/image'
import React from 'react'

const BottomSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center">
      <div className="bg-white p-4 w-fit flex items-center justify-center rounded-xl flex-col mb-10 ">
        <div className="w-md">
          <p className="text-xl font-bold">
            Today's Deals Apple Watch <br /> Series 7 (GPS, 41mm)
          </p>
        </div>

        <div className="mt-10">
          <Image
            src={require('../images/applewatch.png')}
            height={230}
            width={200}
          />

          <p className="text-2xl -ml-2 mt-5 font-bold">₹41,900 </p>
        </div>
      </div>
      <div className="bg-white p-4 w-fit flex items-center justify-center rounded-xl flex-col mb-10 ">
        <div className="w-md">
          <p className="text-xl font-bold">
            Today's Deals Apple Watch <br /> Series 7 (GPS, 41mm)
          </p>
        </div>

        <div className="mt-10">
          <Image
            src={require('../images/airpods.png')}
            height={230}
            width={250}
          />
          <p className="text-2xl -ml-2 mt-5 font-bold">₹21,900 </p>
        </div>
      </div>
      <div className="bg-white p-4 w-fit flex items-center justify-center rounded-xl flex-col mb-10">
        <div className="w-md">
          <p className="text-xl font-bold">
            Today's Deals Apple Watch <br /> Series 7 (GPS, 41mm)
          </p>
        </div>

        <div className="mt-10">
          <Image
            src={require('../images/applewatch.png')}
            height={230}
            width={200}
          />

          <p className="text-2xl -ml-2 mt-5 font-bold">₹41,900 </p>
        </div>
      </div>
    </div>
  )
}

export default BottomSection
