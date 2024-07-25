import Aboutme from './components/Aboutme';
import Bio from './components/Bio';
import Navigation from './components/Navigation';
import "tailwindcss/tailwind.css";
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
// import Feedback from './components/Feedback';
import Contactme from './components/Contactme';

const App = () => {
  
  return (
      <div className="bg-gradient-to-r from-black via-black-900 to-blue-800">
      <Navigation />
      <Bio />
      <Aboutme/>
      <Technologies/>
      <Experience/>
      <Projects/>
      {/* <Feedback/> */}
      <Contactme />
      </div>
  );
}

export default App;
