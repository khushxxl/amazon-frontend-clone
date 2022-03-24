import Image from 'next/image'
import React from 'react'
import { useContext } from 'react'
import AmazonContext from '../context/AmazonContext'
import Modal from './Modal'

const Hero = () => {
  const { open, setOpen } = useContext(AmazonContext)
  return (
    <div>
      <Modal />
      <div className="bg-[#232F3E] hidden lg:flex text-white  space-x-10 p-2 text-sm">
        <p className="ml-3">All</p>
        <p>Best Sellers</p>
        <p>Mobiles</p>
        <p>Customer Service</p>
        <p>Today's Deals</p>
        <p>Electronics</p>
        <p>Fashion</p>
        <p>Prime</p>
        <p>New Releases</p>
        <p
          onClick={() => {
            if (open == true) {
              setOpen(false)
            } else if (open == false) {
              setOpen(true)
            }
          }}
          className="cursor-pointer"
        >
          Sell
        </p>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <Image
              src={require('../images/backdrop.png')}
              className="block w-full"
              alt="..."
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Hero
