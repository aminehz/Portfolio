import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../../images/profile.jpeg';
import developerDark from '../../images/profile.jpeg';
import { motion } from 'framer-motion';
import amine_resume from "../../Harzallah Mohamed Amine.pdf";

const AppBanner = () => {
    const [activeTheme] = useThemeSwitcher();

	const handleDownload = () => {
		const fileUrl = amine_resume;
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = 'amine_resume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
        >
            <div className="w-full md:w-1/3 text-left">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.1,
                    }}
                    className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
                >
                    Hi, I am Mohamed Amine
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.2,
                    }}
                    className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
                >
                    My name is Med Amine HARZALLAH , I am a freshly graduated Computer Science Engineer from the Polytechnic School of Sousse(EUR-ACE, CTI). Passionate about technological innovation, I have acquired advanced expertise in designing AI solutions and advanced web technologies.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.3,
                    }}
                    className="flex justify-center sm:block"
                >
                    <button
                        onClick={handleDownload}
                        className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="Download Resume"
                    >
                        <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                            Download CV
                        </span>
                    </button>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
            >
                <img
                    src={
                        activeTheme === 'dark' ? developerLight : developerDark
                    }
                    alt="Developer"
                />
            </motion.div>
        </motion.section>
    );
};

export default AppBanner;
