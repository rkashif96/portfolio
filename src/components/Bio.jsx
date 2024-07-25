import dp from '/dp.png';
import { motion } from 'framer-motion';
import { RiArrowDownWideFill } from "react-icons/ri";

const Bio = () => {

    const scroll = () => {
        document.getElementById('aboutme').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
        }, 2000);
        setTimeout(() => {
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
        }, 4000);
        setTimeout(() => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }, 6000);
        setTimeout(() => {
            document.getElementById('contactme').scrollIntoView({ behavior: 'smooth' });
        }, 8000);
    };

    return (
        <div className='bg-transparent py-6 px-4 sm:px-6 lg:px-20 relative'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className='flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2'>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="font-sans font-thin text-4xl sm:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white"
                    >
                        Rana Kashif
                    </motion.h1>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-xl sm:text-2xl mt-6 ml-0 lg:ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500"
                    >
                        Full Stack Developer
                    </motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="text-sm sm:text-base mt-4 ml-0 lg:ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white"
                    >
                        I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in frontend technologies like React and Next.js, as well as backend technologies like Node.js, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
                    </motion.p>
                </div>
                <div className='flex justify-center lg:justify-end mt-8 lg:mt-0 lg:ml-12'>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                        className="p-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full"
                    >
                        <img src={dp} alt="Profile" className="block rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-80 lg:h-80" />
                    </motion.div>
                </div>
            </div>
            <motion.div
             initial={{ y: 0 }}
             animate={{ y: [0, -20, 0] }}
             whileHover={{ y: [0, 0, 0] }}
             transition={{ duration: 1.1, repeat: Infinity, repeatType: 'loop' }}
             className="flex justify-center relative group mt-auto mb-6">
                <button
                    onClick={scroll}
                    className="bg-transparent mt-6 text-white rounded-full p-3 hover:border-red-600 hover:text-red-600 transition-colors duration-300"
                    aria-label="Scroll Down"
                >
                    <RiArrowDownWideFill className="w-8 h-8" />
                    <span className="absolute  left-1/2 transform -translate-x-1/2 bg-transparent hover:text-red-600 text-white text-xs rounded px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Auto-Scroll
                    </span>     
                </button>
            </motion.div>
        </div>
    );
}

export default Bio;
