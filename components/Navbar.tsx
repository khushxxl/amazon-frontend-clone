import Image from 'next/image'
import React from 'react'
import {
  LocationMarkerIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <div className="bg-[rgb(19,25,33)] p-2 z-50 sticky top-0 flex items-center justify-between lg:justify-evenly">
      <div className="flex space-x-3 z-50">
        <Image src={require('../images/logo.png')} height={50} width={150} />
        <div className="lg:flex items-center hidden">
          <div>
            <LocationMarkerIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className=" text-gray-200 font-light">Hello</p>
            <p className="text-white font-bold -mt-2"> Select Address</p>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden">
        <input
          placeholder="Search"
          className="w-[500px] p-1 rounded-sm outline-none"
        />
        <div className=" bg-orange-300 p-2">
          <SearchIcon className="text-black h-6 w-6" />
        </div>
      </div>

      <div className=" space-x-4 hidden lg:flex ">
        <div>
          <p className=" text-gray-200 font-light text-xs">Hello,Sign in</p>
          <p className="text-white font-bold -mt- text-sm">Account & Lists</p>
        </div>
        <div>
          <p className=" text-gray-200 font-light text-xs">Returns</p>
          <p className="text-white font-bold -mt- text-sm">& Orders</p>
        </div>
        <div className="flex items-end">
          <ShoppingCartIcon className="h-10 w-10 text-white" />
          <p className="text-white font-bold -mt- text-sm">Cart</p>
        </div>
      </div>

      <div>
        <MenuIcon className="text-white h-10 w-10 lg:hidden cursor-pointer" />
      </div>
    </div>
  )
}

export default Navbar
