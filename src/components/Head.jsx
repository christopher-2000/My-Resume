import {Data} from './Head.js';

import './style.css';

import ParticleBackground from './ParticleBackground.js';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  faInstagram } from '@fortawesome/free-brands-svg-icons';
const git = <FontAwesomeIcon icon={faGithub} size="2x" />
const li = <FontAwesomeIcon icon={faLinkedin} size="2x" />
const insta = <FontAwesomeIcon icon={faInstagram} size="2x" />
function Head(){
    return(
            
        
        <section className="light head-back grad-orange" >
            <ParticleBackground canvasClassName="example"/>
            <div className="stuff">
            <div className="stuff-head">
            <p>
                
            <Typical
                steps={['< Hey I am Christopher />', 1000, 
                '< i LOVE CODING />', 1000,
                '< Welcome To My Page />',1000]}
                loop={Infinity}
            />

            </p>
            </div>

                
            
                <div className="about inline centre">
                    <div className="pro-pic"><img src={Data[0].photo} alt="" /></div>
                    <div className="writing">
                        <h1 className="main-title">M G Christopher</h1>
                        <h1>4th Year Btech CSE at IIIT Kottayam</h1>
                        {Data[0].about}
                    </div>    
                    <div className="side">
                    <div className="social-link"><a href="https://www.github.com/chistopher-2000" className="git-link">{git}</a></div>
                    <div className="social-link"><a href="https://www.linkedin.com/in/christopher2000" className="git-link">{li}</a></div>
                    <div className="social-link"><a href="./" className="git-link">{insta}</a></div>
                    </div>
                </div>
                
            </div>
    
            
        </section>
        
    );
}

export default Head;