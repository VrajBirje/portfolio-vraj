import React, { useRef } from 'react'
import "./parallax.scss"
import { motion, useScroll, useTransform } from 'framer-motion'

export const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ //to get the index of scrolling
    target: ref,
    offset: ["start start", "end start"] //from 'top of the target element reaches top of the v port' to 'top of the target element reaches bottom of the v port
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
  return (
    <div className='parallax'
      ref={ref}
      style={{
        background: type === "skills" ?
          "linear-gradient(180deg,#111132 , #0c0c1d)" :
          "linear-gradient(180deg,#111132 , #505064)"
      }}>
      <motion.h1 style={{ y: yText }}>{type === "skills" ? "My skills !" : "My Projects"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"
        style={{
          y: ybg,
          backgroundImage: `url(${type === "skills" ? "/planets.png" : "/sun.png"})`,
        }}
      ></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  )
}
