import Data from './data/contact.json'
import './style.css'
import icons from './data/icons.js'
import Visits from './Visits.jsx';



function Contact(){
    
    return(
        <section>
            <section className="container dark grad-blue">
            <h1 className="section-title">Contact Me</h1>
            <br /><br />
            <div className='space-between skills'>
            {
                Data.map(entry => {
                    return(
                        <a href={entry.link} className='git-link'>
                        <div className='dark-entry skill-card center'>
                            <p className='medium' style={{margin:10}}>{icons[entry.icon]} {entry.brand} {entry.name}</p>
                        </div>
                        </a>
                        
                    );
                })
            }  
            </div>
            <br /><br />
        
            <Visits />
        </section>
        

        
        
        <footer className='grad-progress center'style={{paddingTop:5,paddingBottom:5}}>
        {icons["copy1"]} <small>This site was designed and developed by me for time pass</small>
        </footer>
        
        </section>
    );
}

export default Contact;