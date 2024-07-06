import '../assets/css/experience-collection.css';
import logo from '../assets/images/logo/ccci.svg';

export default function ExperienceCollection({props, index}) {

    return (
        <>
            <div className={`experience-card experience-card${index + 1}`}>
                <img src={props.bgicon} />
                <div className="logo">
                    test
                    {/* <img src={props.logo} alt=""></img>
                    <h1>{props.label}</h1>
                    <div></div> */}
                </div>
                <div className='description'>
                    {/* <h4>Year:</h4>
                    <div>
                        <span>{props.date}</span>
                    </div> */}
                    
                </div>
            </div>
        </>
    );
}
