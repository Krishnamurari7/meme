import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { motion } from 'motion/react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <motion.h1
      initial = {{
        x: 0
      }}
      animate = {{
        scale: 1.5,
        x: 1000

      }}
      >
      Hello
      </motion.h1>
      <motion.div 
      className='box'
      animate = {{
        x: [0, 1000, 1000, 0 ,0],
        y: [0, 0, 500, 500, 0],
        // scale: 0.5,
        rotate: 360

      }}
      transition={{
        duration: 2,
        delay: 1,
        repeat: Infinity,
        
      }}
      >
      </motion.div>
      <motion.div 
      className='circle'      
      animate = {{
        x: 1000,
        rotate: 360
      }}
      >


      </motion.div>

      <motion.div className='box2'
      drag
      whileDrag={{
        scale: 1.5
      }}
      dragConstraints={{
         left: 0,
         right: 1000,
         top: 0,
         bottom: 500
      }}
      whileHover={{
        scale: 1.5,
        backgroundColor: 'red'
        }}
      whileTap={{
        scale: 0.5
      }}
      animate = {{
        x: [0, 1000, 1000, 0 ,0]
      
      }}>


      </motion.div>

      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn mo lorem20
        lorem20 lorem20
        lorem impsum 
      </p>


    </>
  )
}

export default App
