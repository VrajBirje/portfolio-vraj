import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -700,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollbutton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
const Variants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        },
    },
};


export const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>VRAJ BIRJE</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button >See the latest works</motion.button>
                        <motion.button variants={textVariants}>contact me</motion.button>
                    </motion.div>
                    <motion.img className="scrollAnimation" animate="scrollbutton" src="/scroll.png" alt="" variants={textVariants} />
                </motion.div>
            </div>
            <motion.div className="sliddingTextContainer" variants={Variants} initial="initial" animate="animate">
                MERN Stack Web Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/Vraj1.png" alt="" />
            </div>
        </div>
    )
}
