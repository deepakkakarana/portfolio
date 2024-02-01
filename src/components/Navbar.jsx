import {useState} from 'react'
import './Navbar.css'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export default function Navbar() {

  const [active, setActive] = useState('navBar')
  // Function to toggle navbar.....
  
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  // Function to remove navbar.....
  
  const removeNav =()=>{
    setActive('navBar')
  }
  return (
    <>
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="/" className="logo flex"> 
        <h1 id='portfoilo'> <MdTravelExplore className='icon'/>Portfolio</h1>
          </a>
        </div>


        <div className={active}>
          <ul className="navLists flex">
        <li className="navItem">
          <a style={{color:'blue'}} href="/" className="navlink">Home</a>  
        </li>

        <li className="navItem">
          <a href="/" className="navlink">About</a>  
        </li>

        <li className="navItem">
          <a href="/Skills" className="navlink">Skills</a>  
        </li>

        <li className="navItem">
          <a href="/Projects" className="navlink">Projects</a>  
        </li>

        <li className="navItem">
          <a href="/Exprience" className="navlink">Exprience</a>  
        </li>

        <li className="navItem">
          <a href="/Education" className="navlink">Education</a>  
        </li>
        <button className="btnnav">
          <a style={{color:'white'}} href="/Contact">Contact Me</a>
        </button>
          </ul>
          <div onClick={removeNav} className="colseNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>

    </>
  )
}
