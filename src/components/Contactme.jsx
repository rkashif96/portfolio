import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contactme = () => {
    // Hook to check if the element is in view
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Percentage of the element that needs to be visible
    });

    return (
        <div id='contactme' className="flex flex-col items-center justify-between mt-20 px-28">
            <div className="flex items-center mb-10">
                <motion.p 
                 ref={ref} // Attach ref to the element to observe
                 initial={{ x: -100, opacity: 0 }}
                 animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white"
                >
                    Contact
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
            <div className='bg-transparent mb-20 flex items-center justify-between py-6 px-20'>
               <p className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white'>rkashif96@gmail.com</p>
            </div>
        </div>
    );
};

export default Contactme;
