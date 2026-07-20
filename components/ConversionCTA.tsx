'use client'

import React from 'react'
import AnimatedButton from './AnimatedButton'

const ConversionCTA = () => (
  <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
    <div className="ticket-cta mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-gray-900 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="p-7 sm:p-10 lg:p-14">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">Your next move</p>
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Make the search for your stay simpler.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">Browse the app, compare the details that matter, and choose a room that fits your plans.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <AnimatedButton
            text="Find a Stay"
            href="https://app.pgbee.in"
            target="_blank"
            className="w-full rounded-full bg-yellow-400 px-7 py-3.5 font-bold text-gray-900 hover:bg-yellow-300 sm:w-auto"
          />
          <AnimatedButton
            text="List Your Property"
            href="https://owners.pgbee.in"
            target="_blank"
            className="w-full rounded-full border border-white/30 bg-transparent px-7 py-3.5 font-bold text-white hover:bg-white/10 sm:w-auto"
          />
        </div>
      </div>

      <div className="ticket-owner border-t border-white/10 bg-yellow-400 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900/60">Need help?</p>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-gray-900">Talk to the PgBee team.</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-900/65">Questions about a listing, booking, or getting started as an owner?</p>
        <a href="mailto:pgbee.company@gmail.com" className="mt-6 inline-block border-b-2 border-gray-900 pb-1 font-bold text-gray-900 hover:border-transparent">pgbee.company@gmail.com</a>
      </div>
    </div>
  </section>
)

export default ConversionCTA
