import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
function Footer(){
    return(
        <div style={{margin:"80px 0px" , marginTop:"-315px"}}> 
        <footer class="footer" >
	<div class="waves">
		<div class="wave" id="wave1"></div>
		<div class="wave" id="wave2"></div>
		<div class="wave" id="wave3"></div>
		<div class="wave" id="wave4"></div>
	</div>

	<ul class="menu">
		<li class="menu__item"><a class="menu__link" href="#">Home</a></li>
		<li class="menu__item"><a class="menu__link" href="#">About us</a></li>
		<li class="menu__item"><a class="menu__link" href="#">Contact us</a></li>


	</ul>
	<h2>
          <FaInstagramSquare style={{padding:"0px 20px", color:"white"}} />
          <FaFacebook style={{padding:"0px 20px" , color:"white"}} />
          <FaTwitter style={{padding:"0px 20px", color:"white"}} />
          <MdEmail style={{padding:"0px 20px", color:"white"}} />
          <MdCall style={{padding:"0px 20px", color:"white"}} />
          </h2>

</footer>

        </div>  
    )
}
export default Footer;
