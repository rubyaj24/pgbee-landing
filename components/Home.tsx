'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import AnimatedButton from './AnimatedButton'

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      if (start === end) return

      const totalMiliseconds = duration * 1000
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 1)

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) {
          clearInterval(timer)
        }
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

const Home = () => {
  return (
    <section className='w-full flex items-center justify-center py-8 sm:py-12 lg:py-0 overflow-hidden' id='Home'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center'>
          {/* Content */}
          <motion.div
            className='order-2 lg:order-1 px-4 sm:px-6 lg:px-0 space-y-6 sm:space-y-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className='space-y-4 sm:space-y-6'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[1.1] sm:leading-tight'>
                Your Perfect Stay,
                <span className='block text-yellow-400 mt-2'>Just a Click Away!</span>
              </h1>
              <p className='text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl'>
                Find the best PGs, hostels and rooms nearby with verified listings and instant booking
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
              <AnimatedButton
                text="Search Now"
                href="https://app.pgbee.in"
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-base sm:text-lg rounded-full shadow-lg cursor-pointer"
                icon={
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                }
              />
              <motion.button 
                className='w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold text-base sm:text-lg rounded-full border-2 border-gray-200 shadow-md cursor-pointer'
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-8'>
              <div className='text-center lg:text-left'>
                <p className='text-2xl sm:text-4xl font-black text-gray-900'>
                  <Counter value={30} />+
                </p>
                <p className='text-xs sm:text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider'>Verified Properties</p>
              </div>
              <div className='text-center lg:text-left'>
                <p className='text-2xl sm:text-4xl font-black text-gray-900'>
                  <Counter value={1000} duration={1.5} />+
                </p>
                <p className='text-xs sm:text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider'>Happy Students</p>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className='order-1 lg:order-2 flex justify-center relative px-4 sm:px-6 lg:px-0'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[500px]'>
              {/* Decorative elements - animated with framer-motion */}
              <motion.div 
                className='hidden sm:block absolute -top-4 -right-4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl'
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className='hidden sm:block absolute -bottom-4 -left-4 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl'
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.25, 0.2]
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <motion.div 
                className='relative z-10 w-full'
                whileHover={{ y: -6, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src="/hero-image.png" 
                  width={500} 
                  height={500} 
                  alt="PgBee App Interface" 
                  className='w-full h-auto drop-shadow-2xl'
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
