import Navbar from './components/Navbar';
import Home from './components/Home'
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {

  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
