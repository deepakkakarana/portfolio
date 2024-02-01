import "./Footer.css";
import { PiInstagramLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";

export default function Footer() {

    let linkedln="https://www.linkedin.com/in/deepak-kumar-12b12a213?trk=public-profile-join-page";

	return (
		<>

		<div className="footer">
                
        <div className="mfoot">
        <PiInstagramLogoFill id='icons45'/>
        <a href="https://www.instagram.com/its_mr_deepak007/reels/" id="footlink">Instagram Profile</a><br/>
        <PiLinkedinLogoFill id='icons46'/>
        <a href={linkedln} id="footlink">Linkedln Profile</a><br/>
        </div>

        <div className="mfoot">
        <FaSquareGithub id='icons47'/><a href="https://github.com/deepakmona" id="footlink">Github Id</a><br/>
		<FaSquareWhatsapp id='icons48'/><a href="" id="footlink">8690758038</a><br/>
        </div>
        <div className="mfoot">
        <FaSquareGithub id='icons49'/><a href="" id="footlink">Github Id</a><br/>
        <MdOutgoingMail id='icons50'/><a href="" id="footlink">deepakkumarkakarana@gmail.com</a>
        </div>

		</div>

        </>

	);
}