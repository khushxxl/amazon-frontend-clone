import Image from 'next/image'
import React from 'react'

const SignInBox = () => {
  return (
    <div className="flex items-center flex-col mt-2 ">
      <div className="bg-white shadow-2xl h-fit w-full p-3  ml-2">
        <p className="text-xl font-bold">
          Sign in for your better <br /> experience.
        </p>

        <div className="mt-7 bg-yellow-400 p-2 text-center rounded-lg cursor-pointer">
          <p className="text-sm">Sign in securely</p>
        </div>
      </div>

      <div className="mt-2">
        <Image src={require('../images/laptopad.jpg')} />
      </div>
    </div>
  )
}

export default SignInBox
