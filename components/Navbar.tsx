'use client'

import React, { useState, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import HamburgerIcon from "./HamburgerIcon"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined"
import AnimatedButton from "./AnimatedButton"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuOptions = [
    {
      text: "About",
      icon: <InfoOutlinedIcon />,
      href: "/#about"
    },
    {
      text: "Working",
      icon: <WorkOutlineIcon />,
      href: "/#work"
    },
    {
      text: "Contact",
      icon: <ContactMailOutlinedIcon />,
      href: "/#contact"
    },
  ]
  return (
    <motion.nav 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <Link href="/" className="shrink-0 flex items-center gap-2 cursor-pointer">
          <Image src="/icon.png" alt="PgBee Icon" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10" priority />
          <Image src="/logo.png" alt="PgBee Logo" width={120} height={32} className="w-16 h-8 sm:w-22 sm:h-6" priority />
        </Link>
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <Link href="/#about" className="text-gray-700 font-semibold text-sm xl:text-base hover:text-yellow-400 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-400 after:transition-all after:duration-300">About</Link>
          <Link href="/#work" className="text-gray-700 font-semibold text-sm xl:text-base hover:text-yellow-400 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-400 after:transition-all after:duration-300">How it Works</Link>
          <Link href="/#contact" className="text-gray-700 font-semibold text-sm xl:text-base hover:text-yellow-400 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-400 after:transition-all after:duration-300">Contact</Link>
          <AnimatedButton
            text="Get Started"
            href="https://app.pgbee.in"
            target="_blank"
            className="px-6 xl:px-8 py-2.5 xl:py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm xl:text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          />
        </div>
        <div className="flex lg:hidden items-center justify-center z-50">
          <HamburgerIcon isOpen={openMenu} toggle={() => setOpenMenu(!openMenu)} />
        </div>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right" transitionDuration={400}>
        <Box
          sx={{ width: 280, background: '#fff', height: '100%', borderTopLeftRadius: 24, borderBottomLeftRadius: 24, boxShadow: 4, p: 3 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List sx={{ mt: 2 }}>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 2 }}>
                <ListItemButton component="a" href={item.href} sx={{ borderRadius: 3, background: '#f6f6f6', py: 1.5, '&:hover': { background: '#ffe536', transform: 'scale(1.02)' }, transition: 'all 0.3s' }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={<span className="font-semibold text-base">{item.text}</span>} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 3, display: 'block' }}>
              <AnimatedButton
                text="Search Now"
                href="https://app.pgbee.in"
                target="_blank"
                className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg rounded-xl shadow-md transition-all duration-300"
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </motion.nav>
  )
}

export default Navbar
