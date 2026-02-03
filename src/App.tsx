import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Background3D from './components/Background3D'
import VoiceAssistant from './components/VoiceAssistant'

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Events = React.lazy(() => import('./pages/Events'))
const Members = React.lazy(() => import('./pages/Members'))
const Portal = React.lazy(() => import('./pages/Portal'))

function App() {
  return (
    <>
      <Background3D />
      <VoiceAssistant />
      
      <div className="relative z-10">
        <Navbar />
        
        <Suspense fallback={<LoadingScreen />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/members" element={<Members />} />
              <Route path="/portal/*" element={<Portal />} />
            </Routes>
          </motion.div>
        </Suspense>
        
        <Footer />
      </div>
    </>
  )
}

export default App
