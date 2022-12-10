import React from 'react';
import hero from '../../../../images/hero.png';
import './Hero.css';

const Hero = () => {
    return (
        <section>
            <div className="hero-wrapper py-24 px-5 md:px-0">
                <div className="container mx-auto">
                    <div className="hero-contents text-center">
                        <div className="hero-img">
                            <img className='w-[150px] mx-auto rounded-full ring-2 ring-violet-700' src={hero} alt="" />
                        </div>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold pt-6'>Hi, this is Rashidul Islam</h2>
                        <p className='text-base text-violet-700 font-semibold pt-4'>Passionate Junior Web Developer</p>
                        <div className='pt-8'>
                            <a className='text-base text-white bg-violet-700 py-3 px-6 rounded-md' href="/images/resume.pdf" download={'../../../../images/resume.pdf'}> Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;