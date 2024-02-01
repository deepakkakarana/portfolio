import './secondpage.css'
import { PiInstagramLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export default function Secondpage() {
  return (
    <div>

      <div className="secondpage">
        <div className="smallforicon">
        <PiInstagramLogoFill id='icons1' />
        <PiLinkedinLogoFill id='icons2' />
        <FaSquareGithub id='icons3' />
        <FaSquareWhatsapp id='icons4' />
        <FaFacebook id='icons5' />
        <SiLeetcode id='icons6' />
        </div>
      </div>

    </div>
  )
}
