import Navbar from './components/Navbar';
import Home from './components/Home'
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';


function App() {

  return (
    <div className='p-4'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
