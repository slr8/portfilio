import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <motion.div
            initial={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.2 }}
            className="home__img"></motion.div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section >
  )
}

export default Home