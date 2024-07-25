import { motion } from 'framer-motion';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiPostgresql } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const Technologies = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="flex flex-col items-center justify-center mt-20 px-4 sm:px-10 md:px-20 lg:px-40">
            <motion.div
                ref={ref}
                initial={{ y: -100, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10"
            >
                <p id='skills' className="text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white">
                    Skills
                </p>
            </motion.div>
            <motion.div
               ref={ref}
               initial={{ y: -100, opacity: 0 }}
               animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }} 
            className="bg-transparent mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 py-6 px-4">
                {[
                    { Icon: FaReact, name: 'React.js', color: 'text-blue-500', hoverColor: 'text-blue-700', duration: 0.8 },
                    { Icon: RiNextjsLine, name: 'Next.js', color: 'text-gray-800', hoverColor: 'text-black', duration: 0.9 },
                    { Icon: SiExpress, name: 'Express.js', color: 'text-green-500', hoverColor: 'text-green-700', duration: 1.1 },
                    { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-700', hoverColor: 'text-green-900', duration: 1 },
                    { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-600', hoverColor: 'text-green-800', duration: 0.9 },
                    { Icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-700', hoverColor: 'text-blue-900', duration: 0.8 },
                ].map(({ Icon, name, color, hoverColor, duration }) => (
                    <div key={name} className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-24 lg:ml-2">
                        <motion.div
                        
                            initial={{ y: 0 }}
                            animate={{ y: [0, -100, 0] }}
                            whileHover={{ y: [0, 0, 0] }}
                            transition={{ duration: duration, repeat: Infinity, repeatType: 'loop' }}
                            className={`transition-all duration-300`}
                        >
                            <Icon className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 ${color} hover:${hoverColor}`} />
                            <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white text-center">{name}</p>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;
