import React from 'react'
import Image from 'next/image'

const Section = ({ title, t1, t2, t3, t4, img1, img2, img3, img4, btext }) => {
  return (
    <div className=" p-5  w-fit rounded-md bg-white shadow-xl lg:ml-10  mt-2 flex  justify-center flex-col">
      <p className="text-xl font-bold">{title}</p>
      <div className="space-y mt-5">
        <div className="flex space-x-5 ">
          <div>
            <Image src={img1} height={100} width={150} />
            <p className="text-xs">{t1}</p>
          </div>
          <div>
            <Image src={img2} height={100} width={150} />
            <p className="text-xs">{t2}</p>
          </div>
        </div>
        <div className="flex space-x-5 mt-5 ">
          <div>
            <Image src={img3} height={100} width={150} />
            <p className="text-xs">{t3}</p>
          </div>
          <div>
            <Image src={img4} height={100} width={150} />
            <p className="text-xs">{t4}</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-blue-500 cursor-pointer mt-5">{btext}</p>
    </div>
  )
}

export default Section
