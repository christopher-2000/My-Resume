import {Data} from './data/Head.js';

import './style.css';

import ParticleBackground from './ParticleBackground.js';
import Typical from 'react-typical';

import icons from "./data/icons.js";
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
                    <div className="photo">
                    <div className="pro-pic"><img src={Data[0].photo} alt="" /></div>
                    </div>
                    <div className="writing">
                        <h1 className="main-title">{Data[0].name}</h1>
                        <h1>{Data[0]['one-line']}</h1>
                        {Data[0].about}
                    </div>    
                    <div className="side">
                    <div className="social-link"><a href={Data[0].github} className="git-link">{icons["git2"]}</a></div>
                    <div className="social-link"><a href={Data[0].li} className="git-link">{icons["li2"]}</a></div>
                    <div className="social-link"><a href={Data[0].insta} className="git-link">{icons["insta2"]}</a></div>
                    </div>
                </div>
                
            </div>
    
            
        </section>
        
    );
}

export default Head;