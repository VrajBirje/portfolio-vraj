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
        <motion.p>I build scalable full-stack applications, <br /> AI-powered systems, and modern web platforms</motion.p>
        <motion.hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <motion.img src='/people.webp' alt=''></motion.img>
          <motion.h1>
            <motion.b whileHover={{ color: "orange" }}>Full Stack</motion.b> Development
          </motion.h1>
        </motion.div>
        <motion.div className="title">
          <motion.h1>
            <motion.b whileHover={{ color: "orange" }}>AI Powered</motion.b> Applications
          </motion.h1>
          <motion.button>My Skills</motion.button>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <motion.h1>Programming</motion.h1>
          <motion.p>
            Programming skills include <strong>Python</strong>, <strong>Java</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>C</strong> and <strong>C++</strong>. These languages form the foundation for building efficient, scalable and high performance applications across domains.
          </motion.p>
          <motion.button onClick={() => redirectToSite('https://github.com/VrajBirje')}>GO</motion.button>
        </motion.div>

        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <motion.h1>Frameworks</motion.h1>
          <motion.p>
            Frameworks include <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Express</strong> and <strong>REST APIs</strong> along with databases like <strong>MongoDB</strong>, <strong>PostgreSQL</strong> and <strong>MySQL</strong> used for building scalable full stack applications.
          </motion.p>
          <motion.button onClick={() => redirectToSite('https://nextjs.org/')}>GO</motion.button>
        </motion.div>

        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <motion.h1>AI & Tools</motion.h1>
          <motion.p>
            AI and tools include <strong>LLMs</strong>, <strong>RAG</strong>, <strong>Prompt Engineering</strong> along with <strong>Docker</strong>, <strong>GitHub</strong>, <strong>Google Cloud</strong> and <strong>Postman</strong> which help in building, deploying and managing modern intelligent applications.
          </motion.p>
          <motion.button onClick={() => redirectToSite('https://cloud.google.com/')}>GO</motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}