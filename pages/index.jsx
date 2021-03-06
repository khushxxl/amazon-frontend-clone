import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Section from '../components/Section.jsx'

import SignInBox from '../components/SignInBox.jsx'
import Footer from '../components/Footer.js'
import Script from 'next/script'
import Laptop from '../components/Laptop'
import BottomSection from '../components/BottomSection'
import Sections from '../components/Sections'

const Home = () => {
  return (
    <div className=" flex flex-col">
      <Head>
        <title>Amazon Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
      </Head>

      <Navbar />
      <Hero />

      <Sections />
      <Laptop />
      <BottomSection />

      <Footer />
    </div>
  )
}

export default Home
