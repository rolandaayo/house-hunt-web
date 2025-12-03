'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#6B46C1] via-[#A78BFA] to-[#B8A9FF]"
      >
        <div className="text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-[#6B46C1] font-bold text-2xl">HH</span>
            </div>
          </motion.div>

          {/* Loading Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mb-6"
          >
            <div className="w-16 h-16 mx-auto">
              <motion.div
                className="w-full h-full border-4 border-white/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-white text-2xl font-bold">House Hunt</h2>
            <p className="text-white/80 text-sm">Finding your dream home...</p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="mt-8 h-1 bg-white/30 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/30 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-white/15 rounded-full"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
