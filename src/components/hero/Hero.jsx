// import React from 'react'
// import "./hero.scss"
// import { motion } from 'framer-motion'

// const textVariants = {
//     initial: {
//         x: -700,
//         opacity: 0,
//     },
//     animate: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.1
//         }
//     },
//     scrollbutton: {
//         opacity: 0,
//         y: 10,
//         transition: {
//             duration: 2,
//             repeat: Infinity
//         }
//     }
// }
// const Variants = {
//     initial: {
//         x: 0,
//     },
//     animate: {
//         x: "-220%",
//         transition: {
//             repeat: Infinity,
//             repeatType:"mirror",
//             duration: 20,
//         },
//     },
// };


// export const Hero = () => {
//     return (
//         <div className='hero'>
//             <div className="wrapper">
//                 <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
//                     <motion.h2 variants={textVariants}>VRAJ BIRJE</motion.h2>
//                     <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
//                     <motion.div className="buttons" variants={textVariants}>
//                         <motion.button >See the latest works</motion.button>
//                         <motion.button variants={textVariants}>contact me</motion.button>
//                     </motion.div>
//                     <motion.img className="scrollAnimation" animate="scrollbutton" src="/scroll.png" alt="" variants={textVariants} />
//                 </motion.div>
//             </div>
//             <motion.div className="sliddingTextContainer" variants={Variants} initial="initial" animate="animate">
//                 MERN Stack Web Developer
//             </motion.div>
//             <div className="imageContainer">
//                 <img src="/profile.JPEG" alt="" />
//             </div>
//         </div>
//     )
// }
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

// Shooting Star Component
const ShootingStar = ({ delay, top, size, duration }) => {
    return (
        <motion.div
            className="shooting-star"
            style={{
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
            }}
            initial={{ x: -100, y: -100, opacity: 0 }}
            animate={{
                x: window.innerWidth + 200,
                y: window.innerHeight + 200,
                opacity: [0, 1, 0],
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 3 + 2,
                ease: "linear"
            }}
        />
    );
};

export const Hero = () => {
    // Generate multiple shooting stars
    const shootingStars = [
        { delay: 0, top: 10, size: 3, duration: 1.5 },
        { delay: 2, top: 25, size: 2, duration: 1.2 },
        { delay: 4, top: 15, size: 4, duration: 1.8 },
        { delay: 6, top: 45, size: 2.5, duration: 1.3 },
        { delay: 8, top: 60, size: 3, duration: 1.6 },
        { delay: 10, top: 35, size: 2, duration: 1.4 },
        { delay: 12, top: 80, size: 3.5, duration: 1.7 },
        { delay: 14, top: 5, size: 2, duration: 1.2 },
        { delay: 16, top: 70, size: 3, duration: 1.5 },
        { delay: 18, top: 50, size: 2.5, duration: 1.4 },
    ];

    return (
        <div className='hero'>
            {/* Shooting Stars Container */}
            <div className="shooting-stars-container">
                {shootingStars.map((star, index) => (
                    <ShootingStar
                        key={index}
                        delay={star.delay}
                        top={star.top}
                        size={star.size}
                        duration={star.duration}
                    />
                ))}
            </div>
            
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
                <img src="/profile.JPEG" alt="" />
            </div>
        </div>
    )
}