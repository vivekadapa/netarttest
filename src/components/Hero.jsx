import React from 'react'

const Hero = () => {
    return (
        <div className='mx-4 max-[600px]:text-sm min-[1000px]:mx-12 min-[1000px]:flex min-[1000px]:flex-row justify-center flex flex-col my-4 items-center gap-16'>
            <section className='min-[1000px]:w-[30%] w-[50%]'>
                <img src="/1.png" className='w-full' alt="" />
            </section>
            <section className='min-[1000px]:w-[70%]'>
                <h1 className='font-bold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
                <ul className='list-disc mx-8'>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <figure className='my-2'>
                    <img src="/2.png" alt="" />
                    <figcaption>Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span> . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</figcaption>
                </figure>
            </section>
        </div>
    )
}

export default Hero