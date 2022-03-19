import React from 'react'
import Section from './Section'
import SignInBox from './SignInBox'

const Sections = () => {
  return (
    <div className="grid grid-cols-1 -mt-2 gap-y-10 items-center place-content-center place-items-center md:grid-cols-4  ">
      <Section
        title="Top Trending this summer"
        t1="AC | Best Sellers"
        t2="AC | New Launches"
        t3="Refrigerators | Best Sellers"
        t4="Refrigerators | Discounted"
        img1={require('../images/ac.jpg')}
        img2={require('../images/ac.jpg')}
        img3={require('../images/fridge.jpg')}
        img4={require('../images/fridge.jpg')}
        btext="See More"
      />
      <Section
        title="Revamp your home in style"
        t1="Bedsheets, curtains & more"
        t2="AC | New Launches"
        t3="Home Decorations"
        t4="Home Storage"
        img1={require('../images/bedsheet.jpg')}
        img2={require('../images/decor.jpg')}
        img3={require('../images/storage.jpg')}
        img4={require('../images/light.jpg')}
        btext="Explore all"
      />
      <Section
        title="Amazon Pay | Book your travels tickets"
        t1="Flight tickets"
        t2="Bus tickets"
        t3="Train tickets"
        t4="Essential  products"
        img1={require('../images/flight.jpg')}
        img2={require('../images/bus.jpg')}
        img3={require('../images/train.jpg')}
        img4={require('../images/suitcase.jpg')}
        btext="Explore more from Amazon Pay"
      />

      <SignInBox />
      <Section
        title="Top Trending this summer"
        t1="AC | Best Sellers"
        t2="AC | New Launches"
        t3="Refrigerators | Best Sellers"
        t4="Refrigerators | Discounted"
        img1={require('../images/ac.jpg')}
        img2={require('../images/ac.jpg')}
        img3={require('../images/fridge.jpg')}
        img4={require('../images/fridge.jpg')}
        btext="See More"
      />
      <Section
        title="Revamp your home in style"
        t1="Bedsheets, curtains & more"
        t2="AC | New Launches"
        t3="Home Decorations"
        t4="Home Storage"
        img1={require('../images/bedsheet.jpg')}
        img2={require('../images/decor.jpg')}
        img3={require('../images/storage.jpg')}
        img4={require('../images/light.jpg')}
        btext="Explore all"
      />
      <Section
        title="Amazon Pay | Book your travels tickets"
        t1="Flight tickets"
        t2="Bus tickets"
        t3="Train tickets"
        t4="Essential  products"
        img1={require('../images/flight.jpg')}
        img2={require('../images/bus.jpg')}
        img3={require('../images/train.jpg')}
        img4={require('../images/suitcase.jpg')}
        btext="Explore more from Amazon Pay"
      />
    </div>
  )
}

export default Sections
