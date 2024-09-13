import './App.scss'
import HeroSection from './components/HeroSection/HeroSection'
import Footer from './components/Footer/Footer'
import Below from './components/Below/below'


function App() {
  return (
    <div className="app-container">
      <HeroSection/>
      <div className='big-screen'>
        <Below/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
