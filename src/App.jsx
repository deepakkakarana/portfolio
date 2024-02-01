import './App.css';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
// import Secondpage from './components/Secondpage';
import Thirdcont from './components/Thirdcont';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Exprience from './components/Exprience';
import Education from './components/Education';
import Footer from './components/Footer';



function App() {
  return (
    <>
   
    <Navbar/>
    <Mainpage/>
    {/* <Secondpage/>  */}
    <Skills/>
    <Thirdcont/>
    <Projects/>
    <Exprience/>
   <Education/>
    <Footer/>

    </>
  )
}

export default App
