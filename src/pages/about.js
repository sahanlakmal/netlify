import React, { useRef, useEffect } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profileImage from '../../public/images/profile/my3.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }

    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })

    }, [springValue, value])


    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16 dark:text-light lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 mt-12' />

                    {/**BIOGRAPHY */}
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-4 flex flex-col gap-3 items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>

                            <p className='font-medium dark:text-light' >
                                Welcome to my portfolio I am Sahan Panangamu and highly motivated Software Tester / QA Engineer with extensive experience across diverse sectors.
                                With a strong background in manual and automated testing, I excels in supporting projects throughout their lifecycles,
                                ensuring all core objectives are met. Proficient in Agile, Scrum, and CI/CD environments, I have good understanding of
                                the software testing and development lifecycles. Skilled in stakeholder management and technical proficiency in various
                                tools and languages, including <span className='font-semibold'>Selenium, C#, Java, JavaScript, Visual Studio, SQL, SAP, Appium, JMeter, XMind and many
                                    more.</span>
                            </p>

                            <p className='font-medium dark:text-light' >
                                When I describe about my current situation, I completed my {`Master's`} degree in Information Technology with merit in November 2023 at UWE Bristol. Currently, I am working as a Consultant QA at W3Data Pvt Ltd, handling remote responsibilities.
                                I am actively seeking a QA engineer position in the United Kingdom and I am open to relocate.
                            </p>

                            <p className='font-medium dark:text-light' >
                                Feel free to browse my portfolio to see my work and capabilities. {`Let's`} connect if you need a committed Software Tester!
                            </p>

                            <p className='font-medium dark:text-light' >
                                Thank you for visiting, and I hope we can collaborate soon.
                            </p>



                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
                        bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                        ">
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profileImage} alt='Dhananjaya' className='w-full h-auto rounded-2xl'
                                priority
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            />

                        </div>

                        {/* <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light 
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                    Project Completed
                                </h2>
                            </div>


                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={3} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                    Studie Year
                                </h2>
                            </div>


                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl '>
                                    <AnimatedNumbers value={8} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                    Skills
                                </h2>
                            </div>

                        </div> */}


                    </div>

                    <Education />
                    <Experience />
                </Layout>



            </main>

        </>
    )
}

export default about
