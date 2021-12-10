//import logo from './logo.svg';

import './App.css';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Head from './components/Head.jsx';
import Contact from './components/Contact.jsx';
function App() {
  return(
    <div>
      <Head />
      <Skills />
      <Education />
      <Experience />
      <Project />
      <Contact />
      
    </div>
  );
}


export default App;
