import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Exp from './Exp';

const Experience = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div id='experience' className="flex flex-col items-center justify-center px-10 md:px-20 lg:px-40  mt-10">
            <motion.div
                ref={titleRef}
                initial={{ y: -100, opacity: 0 }}
                animate={titleInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center "
            >
                <p className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white">
                    Experience
                </p>
            </motion.div>

            <Exp
                duration={'2024 - current'}
                job={'Software Engineer - Global Soft'}
                desc={' As a Full Stack Developer at Global Soft, I utilized my MERN stack expertise to develop dynamic web applications. Over the past year, I created interactive UIs with React.js, built robust backends with Node.js and Express.js, and managed scalable databases with MongoDB, contributing significantly to various projects and enhancing my skills.'}
                tags={['React', 'Node', 'Express', 'Redis', 'PostgreSQL', 'MongoDB']}
            />

            <Exp

                duration={'2021 - 2024'}
                job={'Software Engineer - Forrentech'}
                desc={'As a Full Stack Developer at Forrentech, I leveraged my MERN stack expertise to develop dynamic web applications. Over three years, I crafted interactive UIs with React.js and Next.js, built robust backends using Node.js and Express.js, and managed scalable databases with MongoDB. I significantly contributed to numerous projects, enhancing my technical skills and delivering impactful solutions.'}
                tags={['React', 'Next', 'Node', 'Express', 'PostgreSQL', 'MongoDB']}
            />
        </div>
    );
};

export default Experience;
