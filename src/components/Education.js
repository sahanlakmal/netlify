import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ name, place, date, description, degree }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 items-start justify-between dark:text-dark' >
            <LiIcon reference={ref} />
            <motion.div
                className="flex flex-col rounded-2xl border-2 border-solid
                border-dark bg-light p-8 ml-20 z-4 dark:bg-slate-400"
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, type: "spring" }}
            >
                <h2 className='xs:text-sm'>{date}</h2>
                <h3 className='font-bold text-lg xs:text-sm'>{name}</h3>
                <h2 className='xs:text-sm'>{place}</h2>
                <h2 className='xs:text-sm'>{degree}</h2>
                <p className='xs:text-sm'>{description}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    return (
        <div className='mt-40'>
            <h2 className='font-bold text-8xl w-full text-center md:text-6xl sm:text-5xl xs:text-4xl'>
                Education History
            </h2>

            <div ref={ref} className="my-12 w-full relative">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-slate-400' />

                <ul className='w-full flex flex-col items-start justify-between '>
                    <Details
                        date="2023"
                        name="University of the West of England | Bristol"
                        degree="MSc Information Technology"
                    />
                    <Details
                        date="2019"
                        name="Sri Lanka Institute of Information Technology"
                        degree="BSc Information Technology Specialised in Information Technology"
                    />


                </ul>
            </div>
        </div>
    )
}

export default Education 
