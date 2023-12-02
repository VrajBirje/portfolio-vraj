import React, { useState } from 'react'
import { Links } from './links/Links'
import { Togglebutton } from './togglebutton/Togglebutton'
import './sidebar.scss'
import { motion } from 'framer-motion'

export const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const items = ["Homepage", "Services", "Portfolio", "Contact", "About"]
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    const ListVariants={
        open:{
            transition:{
                staggerChildren:0.1
            }
        },
        closed:{
            transition:{
                staggerChildren:0.05,
                staggerDirection:-1
            }
        }
    };
    const itemVariants = {
        open:{
            y:0,
            opacity:1
        },
        close:{
            y:50,
            opacity:0
        }
    }
    return (<motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
            {/* <motion.div className='links' variants={ListVariants}>
                {items.map((item) => (
                    <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>{item}</motion.a>
                ))}
            </motion.div> */}
        </motion.div>
        <Togglebutton setOpen={setOpen} />
    </motion.div>
    )
}
