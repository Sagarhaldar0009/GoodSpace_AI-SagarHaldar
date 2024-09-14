import './App.scss'
import HeroSection from './components/HeroSection/HeroSection'
import Footer from './components/Footer/Footer'
import Below from './components/Below/below'
import Feedback from './components/Feedback/Feedback'
import Features from './components/Features/Features'
import Integration from './components/Integrations/Integration'
import Hotjar from './components/HotJar/Hotjar'


function App() {
  return (
    <div className="app-container">
      <HeroSection/>
      <Hotjar/>
      <Features/>
      <Integration/>
      <div className='big-screen'>
        <Feedback/>
        <Below/> 
      </div>
      <Footer/>
    </div>
  )
}

export default App
