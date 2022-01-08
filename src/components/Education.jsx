
import {Data} from './data/Education.js';
import './style.css';
function Education(){
    return(
        <section className="container light">
            <h1 className="section-title">Education</h1>
            {
                Data.map(entry => {
                    return(
                        <div className="padd">
                            <div className="entry inline light-entry">
                            <div className="logo">
                            
                                <img src={entry.logo} alt="" height="95%" width="97%"/>
                            </div>
                            <div className="details">
                                <h2>{entry.school}</h2>
                                <div className="inline">
                                    <h3>{entry.from} - {entry.to}&emsp;|&emsp;</h3>
                                    <h3>{entry.cgpa}</h3>
        
                                </div>
                                <h4>{entry.degree}</h4>
                            </div>
                        
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
}

export default Education;