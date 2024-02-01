import './Main.css'
import image from '../pictures/front.gif'

export default function Mainpage() {
  return (
    <div>

      <div className="main-container">
      
      <div className="small">
        
        <div className="smallhalf">

        <h1 id='mainh1' >DEEPAK KUMAR</h1>
        <h1 id='mainh2' >I AM A</h1>
        <h1 id='mainh3' >FRONTEND-DEVELOPER</h1>
        <p id='mainp1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa fuga eos? Rem quam assumenda perspiciatis omnis obcaecati magnam aliquid numquam laudantium, aperiam architecto quae, qui laboriosam perferendis corporis ut?</p>

        <button id='btn111' >Contact Me</button>
        <button id='btn111'><a href="https://pdf.ac/2K4NlX">Resume</a></button>

        </div>

        <div className="smallhalf">
          <img src={image} alt="" />
        </div>

      </div>


      </div>
    </div>
  )
}
