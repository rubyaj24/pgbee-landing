'use client'

import React from 'react'

const PlayStore = () => {
  return (
    <section className="relative w-full">
      {/* Top curve */}
      <div className="relative -mb-1">
        <svg
          className="w-full h-[40px] sm:h-[60px] lg:h-[80px] block"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z"
            fill="#facc15"
          />
        </svg>
      </div>

      {/* Yellow body */}
      <div className="bg-yellow-400 w-full py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-300/40 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
            <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            <span className="text-sm font-semibold text-gray-900">Now Available</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-5 leading-tight">
            We are on<br className="sm:hidden" /> Google Play Store
          </h2>

          <p className="text-base sm:text-lg text-gray-800/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Download the PGBee app now and find verified PGs, hostels, and rooms near your college — all in one place.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=in.pgbee.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" viewBox="0 0 24 24" fill="white">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zM14.499 12.693l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            <div className="text-left">
              <span className="text-[10px] sm:text-xs text-gray-300 block leading-none">GET IT ON</span>
              <span className="text-base sm:text-lg font-bold leading-tight">Google Play</span>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="relative -mt-1">
        <svg
          className="w-full h-[40px] sm:h-[60px] lg:h-[80px] block"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="#facc15"
          />
        </svg>
      </div>
    </section>
  )
}

export default PlayStore
