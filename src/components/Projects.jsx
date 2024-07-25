/* eslint-disable react/jsx-key */
// import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Project from './Project';
import leonardo from '/leonardo.png'
import obenan from '/obenan.png'
import wosh from '/wosh.png'
const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Percentage of the element that needs to be visible
    });

    const projects = [
        {
            img: obenan,
            title: 'Obenan',
            desc: 'A project aimed at managing the online presence of businesses across platforms like Google and Facebook from a centralized location. I worked as a full stack developer on Obenan. I implemented many features and resolved numerous production issues working alongside a team. This role provided valuable opportunities for skill testing, professional growth, and knowledge expansion. This role provided valuable opportunities for skill testing, professional growth, and knowledge expansion.',
            skills: ['React', 'Node', 'Express', 'Redis', 'PostgreSQL', 'MongoDB']
        },
        {
            img: leonardo,
            title: 'Leonardo-Impact',
            desc: 'I worked as a full stack developer on Leonardo-Impact, a project providing data analysis using charts. I implemented many features and resolved numerous production issues while collaborating with a team. This role offered valuable opportunities for skill testing, professional growth, and knowledge expansion.',
            skills: ['Next', 'Node', 'Express', 'PostgreSQL', 'MongoDB']
        },
        {
            img: wosh,
            title: 'Wosh',
            desc: 'I worked as a frontend developer on Wosh, a dynamic e-commerce platform with integrated analytics. I implemented various features including interactive charts using React Charts, state management with Redux, and enhanced UI/UX with responsive design. I optimized the user interface for better performance and resolved numerous production issues. This role provided valuable opportunities for skill testing, professional growth, and knowledge expansion.',
            skills: ['React', 'Redux', 'React Charts']
        }
        

    ]

    return (
        <div id='projects' className="flex flex-col items-center justify-center px-10 md:px-20 lg:px-40  mt-20">
            <motion.div
                ref={ref}
                initial={{ y: -100, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center "
            >
                <p className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white">
                    Projects
                </p>
            </motion.div>

            {
                projects.map((project,index) => {
                    return <Project
                        key={index}
                        img={project?.img}
                        title={project?.title}
                        desc={project?.desc}
                        skills={project?.skills}

                    />
                })
            }
        </div>
    );
};

export default Projects