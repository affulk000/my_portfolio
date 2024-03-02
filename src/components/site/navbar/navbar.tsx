import ThemeSwitchBtn from "@/components/themes/theme-switch"
import { Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
    const navbarItem = [
        { id: 1, name: 'Intro.', link: '#intro' },
        { id: 2, name: 'About', link: '#about' },
        { id: 3, name: 'Projects', link: '#project' },
        { id: 4, name: 'Experience', link: '#experience' },
        { id: 5, name: 'Testimonial', link: '#testimonial' },
        { id: 6, name: 'contact', link: '#contact' },
    ]

    const [activeLink, setActiveLink] = useState('#intro')

    useEffect(() => {
        const scrollHandler = () => {

            // Find current active link section base on scroll position
            const currentSection = navbarItem.find(({ link }) => {
                const section = document.querySelector(link)
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top
                    return sectionTop <= 0 && sectionTop >= -100
                }
            });

            // Update active link  if it's different from the current active link
            if (currentSection && currentSection.link !== activeLink) {
                setActiveLink(currentSection.link)
            }
        };
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [activeLink]);

    const handleClick = (link: string) => {
        setActiveLink(link)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <motion.nav
            className="flex items-center justify-between container z-30 w-full h-5 top-2 mx-auto p-4 sticky transition-colors duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {/* logo */}
            <div className="text-lg">
                ED:DEV
            </div>
            {/* list */}
            <ul className="flex gap-4 rounded-full text-white/45 bg-slate-300 px-3 py-2">
                {navbarItem.map(({ name, id, link }) => {
                    return (
                        <li key={id}>
                            <motion.a href={link}
                                className={`text-gray-600 transition-all duration-300 transform dark:text-gray-200 hover:rounded-full hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 dark:hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-400/50 dark:hover:shadow-gray-400/50 hover:p-2 ${activeLink === link ? 'text-gray-900 font-bold rounded-full p-2 shadow bg-white' : ''}`}
                                onClick={() => handleClick(link)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                >
                                {name}
                            </motion.a>
                        </li>
                    )
                })
                }
            </ul>
            {/* mail btn */}
            <div className="flex">
                {/* iconBtn */}
                <ThemeSwitchBtn />
                <div className="flex">
                    <Mail />
                    <a href="mail:form">affule11@yahoo.com</a>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar