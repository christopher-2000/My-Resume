
import {Data} from './experience';
import './style.css';

function Experience(){
    return(
        <section className="container dark">
            <h1 className="section-title">Internships</h1>
            {
                Data.map(entry => {
                    return(
                        
                            <div className="entry inline dark-entry">
                            <div className="logo">
                                <img src={entry.logo} alt="" height="95%" width="97%"/>
                            </div>
                            <div className="details">
                                <h2>{entry.job_title}</h2>
                                <div className="space-around">
                                    <div className="inline">
                                        <h3> {entry.employer}&emsp;|&emsp;</h3> 
                                        <h3>{entry.from} - {entry.to}  </h3>
                                    </div>
                                    <p>{entry.description}</p>
                                    <p><b>Technologies</b> : {entry.techs}</p>

                                </div>
                            </div>
                        
                        </div>
                        
                    )
                })
            }
        </section>
    );
}

export default Experience;