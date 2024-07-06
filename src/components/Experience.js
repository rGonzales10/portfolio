import { useState, useEffect } from 'react';

import '../assets/css/experience.css';
import ExperienceCard from './ExperienceCollections';
import ccciLogo from '../assets/images/logo/CCCI.png';



function Experience() {
    const experiences = [
        { 
            label: 'Centralized Cloud Computing International Inc.', 
            logo: ccciLogo,
            code: 'CCCI',
            bgicon: 'https://centralizedinc.com/img/ccci-logo-white.svg',
            date: 'Febraury 2023 - Present',
            responsibilities: [
                'Developed and maintained web applications using HTML, CSS, JavaScript, and React.js.', 
                'Collaborated with cross-functional teams to design and deploy scalable software solutions.',
                'Implemented RESTful APIs for backend services using Node.js and Express.',
                'Ensured high performance and responsiveness of applications.'
            ],
            skills: [
                'Nuxt.js', 'Vue.js', 'Node.js', 'Express.js', 'TypeScript', 'Sequelize','Docker',
                'Git'
            ]
        },
        {
            label: 'Telcom Learning Hub',
            logo: '',
            date: 'June 2021 - September 2021',
            responsibilities: ['Helping to improve the English communication Skills of japanese Student'],
            skills: ['English']
        }
    ];

    let [activeKey, setActiveKey] = useState(0);

    return (
        <>
            <div className="experience-container" id="experience">
                {/* <button className={`left-btn ${ activeKey === 0 ? 'disabled-btn' : ''}`} disabled={activeKey === 0}  onClick={(e) => {setActiveKey(() => activeKey-1)}}>&lt;</button>
                <ExperienceCard data={experiences[activeKey]} />
                <button  className={`right-btn ${activeKey === experiences.length - 1 ? 'disabled-btn' : ''}`} disabled={activeKey === experiences.length - 1} onClick={() => { setActiveKey(() => activeKey+ 1)}} >&gt;</button> */}
                {experiences.map((v, i) => (<ExperienceCard props={v} index={i}></ExperienceCard>)) }
            </div>
        </>
    );
}

export default Experience;