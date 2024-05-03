import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import certificate01 from '../../public/images/certificates/certificate01.JPG'
import certificate02 from '../../public/images/certificates/certificate02.JPG'
import certificate03 from '../../public/images/certificates/certificate03.JPG'
import certificate04 from '../../public/images/certificates/certificate04.png'
import certificate05 from '../../public/images/certificates/certificate05.png'
import LiIcon from './LiIcon'

const Details = ({ name, image }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between dark:text-dark'>
            <LiIcon reference={ref} />
            <motion.div className="flex flex-col col-span-3 relative h-max rounded-2xl border-2 border-solid
             border-dark bg-light p-8 z-4 dark:bg-slate-400"
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, type: "spring" }}
            >
                <Image src={image} alt='cetificate' className='w-[90%] lg:w-full mx-auto' />
                <div className='my-3 flex flex-col gap-4 xs:mx-0 lg:my-3'>
                    <h3 className='font-bold text-center text-lg xs:text-sm'>{name}</h3>

                </div>

            </motion.div>
        </li >
    )
}

const Experience = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl w-full text-center md:text-6xl sm:text-5xl xs:text-4xl'>
                Certificate Courses
            </h2>

            <div ref={ref} className="my-12 w-[75%] relative">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-slate-400' />

                <ul className='w-full flex flex-col items-start justify-between ml-20'>
                    <Details
                        name="Software testing Foundations – Linkedin"
                        image={certificate01}
                    />
                    <Details
                        name="Postman Essential Training – Linkedin"
                        image={certificate02}
                    />
                    <Details
                        name="Learning Microsoft 365 Copilot – Liinkedin "
                        image={certificate03}
                    />
                    <Details
                        name="Introduction to cybersecurity – Cisco"
                        image={certificate04}
                    />
                    <Details
                        image={certificate05}
                    />


                </ul>
            </div>
        </div>
    )
}

export default Experience