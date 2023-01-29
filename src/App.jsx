import Navbar from './components/Navbar';
import Home from './components/Home'
import Skills from './components/Skills';
import About from './components/About';


function App() {

  return (
    <div className='p-4'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
