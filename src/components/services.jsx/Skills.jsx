import './skills.scss'
import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    x: -700,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

export const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device width is below a certain breakpoint
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const redirectToSite = (url) => {
    window.location.href = url; // Use the provided URL for redirection
};
  return (
    <motion.div className='skills'
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      animate={isMobile ? "animate" : "initial"}
      whileInView={!isMobile && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.p>I focus on creating dynamic websites <br /> and applications</motion.p>
        <motion.hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <motion.img src='/people.webp' alt=''></motion.img>
          <motion.h1>
            <motion.b whileHover={{ color: "orange" }}>Website</motion.b> Development
          </motion.h1>
        </motion.div>
        <motion.div className="title">
          <motion.h1>
            <motion.b whileHover={{ color: "orange" }}>And App</motion.b> Development
          </motion.h1>
          <motion.button>My skills</motion.button>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <motion.h1>MERN Stack</motion.h1>
          <motion.p>
            MERN stack entirely uses JavaScript. MERN stands for MONGODB, EXPRESS, REACT, NODE after the four key technologies that make up the stack.
          </motion.p>
          <motion.button onClick={() => redirectToSite('https://www.mongodb.com/mern-stack')}>GO</motion.button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <motion.h1>Flutter</motion.h1>
          <motion.p>
          Flutter is an open-source UI software development kit created by Google, used to develop cross platform applications for iOS, android, etc.
          </motion.p>
          <motion.button onClick={() => redirectToSite('https://flutter.dev/')}>GO</motion.button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <motion.h1>Firebase</motion.h1>
          <motion.p>
          Firebase is a set of backend cloud computing services and application development platforms including Android & iOS  provided by Google. 
          </motion.p>
          <motion.button onClick={() => redirectToSite('https://firebase.google.com/')}>GO</motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
