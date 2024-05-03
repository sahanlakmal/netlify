import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)
const Logo = () => {
    return (
        <div className="flex absolute justify-center items-center xs:w-full">
            <MotionLink
                href="/"
                className="text-sm bg-blue-950 rounded-md p-1 font-semibold flex items-center justify-center border border-solid border-transparent dark:border-light"
                whileHover={{
                    backgroundColor: ["rgba(28, 0, 129, 0.8)", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: { duration: 1, repeat: Infinity }
                }}
            >
                <span className=" text-white mr-1">SAHAN</span>
                <span className="w-32 h-8 rounded bg-white text-black flex items-center justify-center dark:text-red-500">
                    PANANGAMU
                </span>
            </MotionLink>
        </div >
    )
}

export default Logo