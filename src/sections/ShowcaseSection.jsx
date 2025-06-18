import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'


gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    
    
    useGSAP(() => {

        const projects = [
            project1Ref.current, 
            project2Ref.current,
            project3Ref.current
        ];

        gsap.fromTo(sectionRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
        );
        
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y:0, opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger:{
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
            )
        })

    }, []);
    
  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src='/images/projectPW.png' alt='Ryde' />
                    </div>
                    <div className='text-content'>
                        <h2>Digital Platform for the artist of club named Painting Wing</h2>
                        <p className='text-white-50 md:text-xl'>
                            An App build wuith Next, ThreeJS, React-Three-Fibre and Tailwind that allows users to feel the 3D realm of the club.
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src='/images/projectEES.png' alt='Library Management Platform' />
                        </div>
                        <h2>Electrical Engineering Society</h2>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src='/images/project3.png' alt='YC Directory' />
                        </div>
                        <h2>YC Directory - A startup Showcase App</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection
