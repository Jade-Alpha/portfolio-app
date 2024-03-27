import React from 'react';
import './about.css';
import image from '../../assets/c704f923-e595-469a-9e8c-f9137ef31039.jpg'
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';



function About(props) {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>


            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={image} alt='about image' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards' >
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ years working Experience</small>
                        </article>

                        <article className='about__card'>
                            <FiUser className='about__icon' />
                            <h5>Clients</h5>
                            <small>300+ Clients Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>80+ completed Projects</small>
                        </article>
                    </div>
                    <p>
                        Crafting immersive digital experiences through innovative design and flawless functionality."

                        This statement emphasizes your expertise in creating engaging web experiences while highlighting your skills in design and development. It conveys a sense of creativity, technical prowess, and a commitment to delivering high-quality work.

                    </p>
                    <a href='#contact' className='btn btn-primary text-black'>Let's Talk</a>
                </div>
            </div>

        </section>
    );
}

export default About;