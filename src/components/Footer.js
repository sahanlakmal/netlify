import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedInIcon } from "./Icons";
import useThemeSwitcher from "./hook/useThemeSwitcher";
import facebook from '../../public/images/svgs/facebook.png'
import whatsapp from '../../public/images/svgs/whatsapp.webp'

const Footer = () => {
    const [mode, setMode] = useThemeSwitcher()
    return (
        <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <div className="flex items-center lg:justify-center">
                    <Logo />
                </div>
                <span className='dark:text-light lg:mt-12'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex flex-row lg:mt-5'>
                    <motion.a href="https://www.linkedin.com/in/sahan-panangamu/" target={"_blank"} className="w-6 mr-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://github.com/sahanlakmal/ITP1" target={"_blank"} className={`w-6 mr-3 rounded-full p-0 ${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.facebook.com/jsahan.lakmal"
                        target={"_blank"}
                        className={`w-7 mr-3 rounded-full`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}>
                        <Image src={facebook} alt="facebook" />
                    </motion.a>

                    <motion.a href="https://wa.me/447367167279"
                        target={"_blank"}
                        className={`w-7 mr-3 rounded-full ${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"}`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}>
                        <Image src={whatsapp} alt="facebook" />
                    </motion.a>

                </div>
            </Layout>
        </footer>
    )
}

export default Footer
