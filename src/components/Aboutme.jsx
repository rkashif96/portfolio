import aboutMe from '/aboutme.gif';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Aboutme = () => {
    // Hook to check if the element is in view
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Percentage of the element that needs to be visible
    });

    return (
        <div id='aboutme'className="flex flex-col mt-20 items-center justify-between sm:px-6 md:px-12 lg:px-28">
            <div className="flex items-center ">
                <motion.p 
                 ref={ref} // Attach ref to the element to observe
                 initial={{ x: -100, opacity: 0 }}
                 animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white"
                >
                    About
                </motion.p>
                
                <motion.p
                   ref={ref} // Attach ref to the element to observe
                   initial={{ x: 100, opacity: 0 }}
                   animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                   transition={{ duration: 0.5, delay: 0.5 }}
                   className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500 ml-2"
                >
                    Me
                </motion.p>
            </div>
            <div className='bg-transparent mt-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between py-6 px-4 sm:px-6 lg:px-20'>
                <div className='flex-none w-full lg:w-1/2 mb-6 lg:mb-0'>
                    <div className="p-1 rounded-lg overflow-hidden">
                        <motion.img 
                         ref={ref} // Attach ref to the element to observe
                         initial={{ x: -100, opacity: 0 }}
                         animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                         transition={{ duration: 0.5, delay: 0.75 }}
                        src={aboutMe} alt="DP.png" className="block rounded-lg w-96 h-80" />
                    </div>
                </div>
                <div>
                    <motion.p
                      ref={ref} // Attach ref to the element to observe
                      initial={{ x: 100, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    className="text-wrap ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white">
                        Hello! I am Kashif, a passionate Full Stack Developer with over 3 years of experience specializing in the MERN stack. Currently, I am working at Global Soft, where I leverage my expertise in prompt engineering, API integration, and backend development to deliver high-quality software solutions. I have worked on diverse projects like Leonardo-Impact, a platform for smart data analysis. Here, I integrated Mixpanel and Hotjar for advanced analytics, enhanced the filtered sidebar, and created a dynamic settings page.

                        In the Obenan project, designed to manage online business presence across platforms like Google and Facebook.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
