import {Data} from './Head.js';

import './style.css';

import ParticleBackground from './ParticleBackground.js';
import Typical from 'react-typical';
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
            
            <div className="inline">
                <div className="pro-pic"><img src={Data[0].photo} alt="" /></div>
                <div className="about">
                    <h1 className="section-title">About</h1>
                    {Data[0].about}
                </div>
            </div>
            </div>
            
        </section>
        
    );
}

export default Head;