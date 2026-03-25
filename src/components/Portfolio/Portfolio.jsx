import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Reelx Clothing",
        img: "/ecommerce.webp",
        desc: "A production ready ecommerce platform built using Next.js, Node.js and PostgreSQL with secure authentication, Razorpay payments and scalable APIs. Integrated an LLM powered assistant for natural language product search and AI driven recommendations.",
        link: "https://reelxclothing.shop"
    },
    {
        id: 2,
        title: "InternHub",
        img: "/people.webp",
        desc: "An AI powered internship platform developed using React.js, Redux, Node.js and MongoDB with MVC architecture. Features include resume analyzer and RAG based job matching system enabling semantic search and personalized recommendations.",
        link: "https://github.com/VrajBirje/internhub"
    },
    {
        id: 3,
        title: "SitePilot",
        img: "/event.jpeg",
        desc: "A multi tenant SaaS website builder built with MERN stack enabling organizations to create and deploy websites with role based access and scalable APIs. Includes AI workflows using LLMs for automated layout and content generation.",
        link: "https://github.com/VrajBirje/SitePilot"
    },
    {
        id: 4,
        title: "Webnova Projects",
        img: "/chat.jpg",
        desc: "Developed and deployed scalable web applications for businesses including hyperlocal platforms and SaaS products using React, Next.js, Node.js and PostgreSQL. Managed cloud infrastructure on Google Cloud and Hostinger.",
        link: "https://github.com/VrajBirje"
    },
    {
        id: 5,
        title: "AI Features",
        img: "/recipe.png",
        desc: "Built advanced AI features including LLM based systems, RAG pipelines and prompt engineering workflows enabling intelligent recommendations, semantic search and automated content generation across applications.",
        link: "https://github.com/VrajBirje"
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

