'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedButtonProps {
  text: string
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  href?: string
  target?: string
  className?: string
  delayMs?: number
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  icon,
  onClick,
  href,
  target,
  className = "",
  delayMs = 600,
}) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (clicked) return
    e.preventDefault()
    setClicked(true)

    if (onClick) {
      onClick(e)
    }

    setTimeout(() => {
      if (href) {
        if (target === "_blank") {
          window.open(href, "_blank", "noopener,noreferrer")
        } else {
          window.location.href = href
        }
      }
      setClicked(false)
    }, delayMs)
  }

  // Default premium sliding check icon if no icon is passed
  const defaultIcon = icon || (
    <svg
      className="w-6 h-6 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  )

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-hidden flex items-center justify-center cursor-pointer ${className}`}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <AnimatePresence mode="wait">
        {!clicked ? (
          <motion.span
            key="text"
            className="flex items-center justify-center gap-2 w-full h-full"
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60, filter: "blur(2px)" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {text}
          </motion.span>
        ) : (
          <motion.span
            key="icon"
            className="flex items-center justify-center w-full h-full absolute inset-0"
            initial={{ opacity: 0, x: 60, filter: "blur(2px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -60, filter: "blur(2px)" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {defaultIcon}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default AnimatedButton
