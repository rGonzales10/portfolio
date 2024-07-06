
import { useEffect, useState } from 'react';
import '../assets/css/home.css';
import profile from '../assets/images/grad-pic.jpg';

export default function Home() {
        var TxtType = function(el, toRotate) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {

            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 150 - Math.random() * 100;

        if (this.isDeleting) { delta /= 4; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 200;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typing');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
                if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate));
            }
        }
    };

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    let navbar = document.querySelector('.navbar');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        

        if(navbar && navbar.style ){
            if(scrollPosition >= 50) {
                // navbar.style = 'animation: stickyStart 1s ease';
                navbar.style.borderBottom = '2px solid transparent';
                navbar.style.padding = '5px 0';
                // console.log('typeof navbar :>> ', navbar);
            } else {
                navbar.style.borderBottom = '2px solid #353c44';
                navbar.style.padding = '15px 0';
            }
    
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition])

    const info = [
        { icon: 'fa-solid fa-envelope', label: 'richardgonzales9797@gmail.com', url: 'mailto:' },
        { icon: 'fa-solid fa-location-dot', label: 'Makati City, Philippines' },
        { icon: 'fa-solid fa-briefcase', label: 'Full time / Developer' },
        { icon: 'fa-brands fa-github', label: 'rGonzales10', url: 'https://github.com/' }
    ];

    let tags = [];
    for(let i = 1; i <= 4; i++) {
        tags.push(`tag${i}`);
    }


    return (
        <>
            <div className='header'>
                <div className='header-content'>
                    <div className='nav'>
                        <div className='navbar'>
                            <div className='logo'>
                                <h2>Richard.</h2>
                            </div>
                            <div className='navlist'>
                                <ul>
                                    <a href='#'><li>Home</li></a>
                                    <a href='#about'><li>About Me</li></a>
                                    <a href='#'><li>Experiences</li></a>
                                    <a href='#'><li>Projects</li></a>
                                    <a href='#'><li>Skills</li></a>
                                </ul>
                            </div>
                            <div className='theme'>
                                <span style={{ 'color': '#fff' }}>Theme</span>
                            </div>
                        </div>
                    </div>
                    <div className='page-content'>
                        <div id='home'>
                            <div className='home-text'>
                                <h1>Hey <br />I'm <span>Richard</span>,</h1>
                                <p>I am a <span className='desc-tag typing' data-type='["Full Stack Web Developer.","Mobile Developer."]' ></span></p>
                                <div className='tagline'>
                                    <p>"Specializing in bringing innovative ideas to life through expert digital transformations."</p>
                                </div>
                                <button><i class="fa-solid fa-download"></i> Download CV</button>
                            </div>
                            <div className='home-card'>
                                <div class='home-card-header'>
                                    <img src={profile} alt="Photo" />
                                    <h3>Richard</h3>
                                    <p>Full-Stack Developer</p>
                                </div>
                                <div className='home-card-body'>
                                    {info.map((v, i) => 
                                        <div className='info'>
                                            <span>
                                                <i className={v.icon}></i> {
                                                    (i === 0 || i === 3) ? <a href={`${v.url}${v.label}`} target='_blank' className='info-label'>{v.label}</a>
                                                    : <span className='info-label'>{v.label}</span>
                                                }
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className='home-card-tags'>
                                    {tags.map(tag => <span className='tag'>{tag}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id='about'>
                    <div className='page-container'>
                        <div className='about-container'>
                            <div className='about-text'>
                                <h1>About Me</h1>
                                <p><span className='about-hello'>Hello!<br /></span>Laboris culpa id ad magna anim ut <span className='extra'>Lorem</span> qui aliqua eiusmod anim non in. Aute est non quis <span className='extra'>dolore</span> occaecat duis occaecat aliqua non officia. Labore eu pariatur quis eu consequat dolor ipsum magna <span className='extra'>proident</span> ex nulla consequat quis. Fugiat dolore veniam occaecat occaecat tempor sunt pariatur irure consectetur. Aliqua commodo dolor cupidatat sunt qui excepteur ea <span className='extra'>cupidatat</span> veniam.</p>
                            </div>
                            <div className='about-image'>
                                <img src={profile} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};