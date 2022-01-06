import Data from './data/contact.json'
import './style.css'
import icons from './data/icons.js'
function Contact(){
    return(
        <section className="container dark grad-blue">
            <h1 className="section-title">Contact Me</h1>
            <div className='space-between skills'>
            {
                Data.map(entry => {
                    return(
                        <a href={entry.link} className='git-link'>
                        <div className='dark-entry skill-card center' style={{paddingTop:5},{paddingBottom:5}}>
                            <p className='medium'>{icons[entry.icon]} {entry.brand} {entry.name}</p>
                        </div>
                        </a>
                        
                    );
                })
            }  
            </div>
            
        </section>
    );
}

export default Contact;