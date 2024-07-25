/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Exp = (props) => {
    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    // Character limit for truncation
    const charLimit = 200;

    // Helper function to create a snippet that ends at the last space before the limit
    const createSnippet = (text, limit) => {
        if (text.length <= limit) return text;
        const trimmedText = text.substring(0, limit);
        const lastSpaceIndex = trimmedText.lastIndexOf(' ');
        return lastSpaceIndex > -1 ? text.substring(0, lastSpaceIndex) + '...' : text.substring(0, limit) + '...';
    };

    // Determine if the description exceeds the character limit
    const exceedsCharLimit = (props?.desc || '').length > charLimit;

    // Get a snippet of the description if it exceeds the limit
    const snippet = createSnippet(props?.desc, charLimit);

    return (
        <div className='bg-transparent flex flex-row mt-20'>
            <div className='flex-none h-60 w-1/3 lg:w-1/3 sm:text-left lg:text-center '>
                <motion.div
                    ref={textRef}
                    initial={{ x: -100, opacity: 0 }}
                    animate={textInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                >
                    <p className="font-sans font-thin text-base sm:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white">
                        {props?.duration}
                    </p>
                </motion.div>
            </div>
            <motion.div
                ref={textRef}
                initial={{ x: 100, opacity: 0 }}
                animate={textInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-wrap text-left bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white  lg:mt-0"
            >
                <p className="font-sans font-bold text-lg sm:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white">
                    {props?.job}
                </p>
                <p className={`text-sm sm:text-base lg:text-lg font-sans font-normal text-pretty bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white mt-4`}>
                    {isExpanded || !exceedsCharLimit ? props?.desc : snippet}
                </p>
                {exceedsCharLimit && (
                    <button onClick={handleToggle} className="text-xs sm:text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-purple-600 hover:via-pink-700 hover:to-red-700 mt-2">
                        {isExpanded ? 'See Less' : 'See More'}
                    </button>
                )}
                <div className="text-sm sm:text-base lg:text-lg text-white mt-4 flex flex-wrap">
                    {props?.tags.map((tag, index) => (
                        <div key={index} className='rounded-full border border-transparent hover:border-red-500 ml-2 p-2'>
                            <p className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500'>
                                {tag}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Exp;
