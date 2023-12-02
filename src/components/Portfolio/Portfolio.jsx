import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "EPF manager",
        img: "/people.webp",
        desc: "Employee provident fund manager was developed for Regional Office Mumbai. A user friendly full stack web application for reading , entering and verifying employee provident fund data. It was a sponsorship project.",
        link:"https://chipper-bombolone-8ca005.netlify.app" 
    },
    {
        id: 2,
        title: "Ecommerce App",
        img: "/ecommerce.webp",
        desc: "A frontend of an ecommerce application developed using react styled-components. With all the pages in an ecommerce application like product list , register , login , products , home , etc.",
        link:"https://vrajecommerce.netlify.app/"
    },
    {
        id: 3,
        title: "Chat App",
        img: "/chat.jpg",
        desc: "A full stack mobile chat application. Developed using Flutter and Firebase. With all functionalities like login , register , creating groups , chatting and joining and leaving groups",
        link:"https://github.com/VrajBirje/Chat-App"
    },
    {
        id: 4,
        title: "Event It",
        img: "/event.jpeg",
        desc: "A full stack mobile application for event management. Where event organizations post there events so that other users can discover and participate in those events",
        link:"https://github.com/VrajBirje/event-it"
    },
    {
        id: 5,
        title: "Recipe App",
        img: "/recipe.png",
        desc: "A full stack Recipe app to using MERN stack authenticate user create recipe , save it and view it. Focussing on the basic CURD operations",
        link:"https://github.com/VrajBirje/Recipe-App"
    },
]
const redirectToSite = (link) => {
    window.location.href = link; // Replace with the URL of the site you want to redirect to
};

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"])
    return <section ref={ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" 
                style={{ y: y }}
                >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button onClick={() => redirectToSite(item.link)}>See project</button>
                </motion.div>
            </div>
        </div>
    </section>
}

export const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div className='portfolio'
            ref={ref}
        >
            <div className="progress">
                <h1>Feature works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

