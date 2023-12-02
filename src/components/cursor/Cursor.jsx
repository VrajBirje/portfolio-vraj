import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import './cursor.scss'

export const Cursor = () => {
    const [postition, setPostition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const mouseMove = (e) => {
            setPostition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    },[])
    console.log(postition)

    return (
        <motion.div className='cursor' animate={{x:postition.x, y:postition.y}}></motion.div>
    )
}
