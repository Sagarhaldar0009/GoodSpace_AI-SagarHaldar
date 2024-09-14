import './App.scss'
import HeroSection from './components/HeroSection/HeroSection'
import Footer from './components/Footer/Footer'
// import Below from './components/Below/below'
import Below from './components/Below/Below'
import Feedback from './components/Feedback/Feedback'
import Features from './components/Features/Features'
import Integration from './components/Integrations/Integration'
import Hotjar from './components/HotJar/Hotjar'


function App() {
  return (
    <div className="app-container">
      <HeroSection/>
      <div id='hero-section'>
        <Hotjar/>
      </div> 
      <div id="features-section">
        <Features />
      </div>
      <div id='integrate'>
        <Integration/>
      </div>
      <div className='big-screen' id='feedback-section'>
        <Feedback/>
        <Below/> 
      </div>
      <Footer/>
    </div>
  )
}

export default App
