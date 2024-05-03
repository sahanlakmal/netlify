import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Image from 'next/image'
import { useRouter } from "next/router"
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from 'framer-motion'
import useThemeSwitcher from "./hook/useThemeSwitcher";
import facebook from '../../public/images/svgs/facebook.png'
import whatsapp from '../../public/images/svgs/whatsapp.webp'


const CustomeLink = ({ href, title, className = "" }) => {

  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={` h-[1px] inline-block bg-black absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  )
}

const CustomeMobileLink = ({ href, title, className = "", toggle }) => {

  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={` h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-dark`}>
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)
  const [navOpacity, setNavOpacity] = useState(1);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newOpacity = Math.max(0.9, 1 - scrollY / 300);
    setNavOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ opacity: navOpacity }} className="fixed top-0 left-0 right-0 z-10 w-full lg:py-8 px-32 py-5 font-medium flex items-center justify-between dark:text-light bg-white dark:bg-black shadow-md sm:px-10">

      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm
        ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}
        `}></span>

        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
        ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}></span>

        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
        ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}
        `}></span>
      </button>


      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomeLink href="/" title="Home" className="mr-4 text-black dark:text-light" />
          <CustomeLink href="/about" title="About" className="mx-4 text-black dark:text-light" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://www.linkedin.com/in/sahan-panangamu/" target={"_blank"} className="w-6 mr-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <LinkedInIcon />
          </motion.a>
          <motion.a href="https://github.com/sahanlakmal/ITP1" target={"_blank"} className={`w-8 mr-3 rounded-full p-1 ${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <GithubIcon />
          </motion.a>
          <motion.a href="https://www.facebook.com/jsahan.lakmal" target={"_blank"} className={`w-9 mr-3 rounded-full p-1 `} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <Image src={facebook} alt="facebook" />
          </motion.a>
          <motion.a href="https://wa.me/447367167279" target={"_blank"} className={`w-8 mr-3 rounded-full ${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <Image src={whatsapp} alt="facebook" />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {
              mode === 'dark' ?
                <SunIcon className={"fill-dark"} /> :
                <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </div>

      {
        isOpen ?
          (<motion.div
            className="min-w-[70vw] flex flex-col justify-between items-center 
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}

          >
            <nav className="flex flex-col items-center justify-center">
              <CustomeMobileLink href="/" title="Home" className=" " toggle={setIsOpen} />
              <CustomeMobileLink href="/about" title="About" className=" " toggle={setIsOpen} />
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-5">

              <motion.a href="https://www.linkedin.com/in/dhananajaya-lakshan-498a041bb/"
                target={"_blank"}
                className="w-6 mr-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>

              <motion.a href="https://github.com/DhananjayaLakshan"
                target={"_blank"}
                className={`w-8 mr-3 sm:mx-1 rounded-full p-1 
                ${mode === 'light' ? "bg-light " : "bg-dark "}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>

              <motion.a href="https://www.facebook.com/share/J5QVzNNJRQbNVKbX/?mibextid=qi2Omg"
                target={"_blank"}
                className={`w-9 mr-3 rounded-full p-1 sm:mx-1`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <Image src={facebook} alt="facebook" />
              </motion.a>

              <motion.a href="https://wa.me/94775843047"
                target={"_blank"}
                className={`w-8 mr-3 rounded-full ${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"}`}
                whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                <Image src={whatsapp} alt="facebook" />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1 
                ${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"}
                `}
              >
                {
                  mode === 'dark' ?
                    <SunIcon className={"fill-dark"} /> :
                    <MoonIcon className={"fill-dark"} />
                }
              </button>
            </nav>
          </motion.div>)
          : null
      }

      <div className="absolute left-[50%] top-5 translate-x-[-50%]">
        <Logo />
      </div>

    </header >
  );
};

export default NavBar;
