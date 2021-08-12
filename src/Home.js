import React, { useState } from "react";
import "./Home.css";
import FlightIcon from '@material-ui/icons/Flight';
import HotelIcon from '@material-ui/icons/Hotel';
import RoomIcon from '@material-ui/icons/Room';
import {Link, Redirect} from "react-router-dom";
import img1 from "./Images/mountfuji.jpg"
import img2 from "./Images/imperial-tokyo.jpg";
import img3 from "./Images/osaka.jpg";
import Button from '@material-ui/core/Button';



const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0, 200) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Home = () => {
return (
	<div className="container">

<h2>Tourium Places in Japan</h2>

<div class="card">
  <img class = "img-1" src= {img1} alt="Avatar"/>
  <div class="container">
    <h4><b>Mount Fuji</b></h4> 
	<h5><b>Location: </b><span>Fuji-Hakone-Izu National Park, Yamanashi and Shizuoka ken</span></h5>
	<p>
		<ReadMore>
		Mount Fuji (富士山, Fujisan, Japanese: [ɸɯꜜ(d)ʑisaɴ] (About this soundlisten)), located on the island of Honshū, is the highest mountain in Japan, standing 3,776.24 m (12,389.2 ft). It is the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.[1] Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708.[4][5] The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from there on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan and it is frequently depicted in art and photography, as well as visited by sightseers and climbers.[6]

Mount Fuji is one of Japan's "Three Holy Mountains" (三霊山, Sanreizan) along with Mount Tate and Mount Haku. It is a Special Place of Scenic Beauty and one of Japan's Historic Sites.[7] It was added to the World Heritage List as a Cultural Site on June 22, 2013.[7] According to UNESCO, Mount Fuji has "inspired artists and poets and been the object of pilgrimage for centuries". UNESCO recognizes 25 sites of cultural interest within the Mount Fuji locality. These 25 locations include the mountain and the Shinto shrine, Fujisan Hongū Sengen Taisha, as well as the Buddhist Taisekiji Head Temple founded in 1290, later depicted by Japanese ukiyo-e artist Katsushika Hokusai.
		</ReadMore>
	</p>
	
   <div>

		<Button class = {"external-page1"} component={Link} to= "/hotel-near-mount-fuji" color="primary"><HotelIcon/></Button>
		<Button class = {"external-page2"} component={Link} to= "/mount-fuji-flight" color="primary"><FlightIcon/></Button>
		<Button class = {"external-page3"} component={Link} to= "/mount-fuji"  color="primary"><RoomIcon/></Button>

  </div>
    </div>
    </div>

	<div class="card">
  <img class = "img-1" src= {img2} alt="imperial tokyo"/>
  <div class="container">
    <h4><b>Imperial Tokyo</b></h4> 
	<h5><b>Location: </b><span>Chiyoda district, Tokyo, Japan </span></h5>
	
	<p>
		<ReadMore>
		The Tokyo Imperial Palace (皇居, Kōkyo, literally 'Imperial Residence') is the main residence[2] of the Emperor of Japan. It is a large park-like area located in the Chiyoda district of the Chiyoda ward of Tokyo and contains several buildings including the main palace (宮殿, Kyūden), some residences of the Imperial Family, an archive, museums and administrative offices.

It is built on the site of the old Edo Castle. The total area including the gardens is 1.15 square kilometres (0.44 sq mi).[1] During the height of the 1980s Japanese property bubble, the palace grounds were valued by some to be more than the value of all of the real estate in the state of California
		</ReadMore>
	</p>
    
	<Button class = {"external-page1"} component={Link} to= "/hotel-near-imperial-tokyo" color="primary"><HotelIcon/></Button>
	<Button class = {"external-page2"} component={Link} to= "/imperial-tokyo-flight" color="primary"><FlightIcon/></Button>
	<Button class = {"external-page3"} component={Link} to= "/imperial-tokyo"  color="primary"><RoomIcon/></Button>


	 </div>
    </div>


	<div class="card">
  <img class = "img-1" src= {img3} alt="Osaka Castle"/>
  <div class="container">
    <h4><b>Osaka Castle</b></h4> 
	<h5><b>Location: </b><span>Osaka, Japan</span></h5>
	<p>
		<ReadMore>
		The castle is one of Japan's most famous landmarks and it played a major role in the unification of Japan during the sixteenth century of the Azuchi-Momoyama period
		The main tower of Osaka Castle is situated on a plot of land roughly one square kilometer. It is built on two raised platforms of landfill supported by sheer walls of cut rock, using a technique called Burdock piling, each overlooking a moat. The central castle building is five stories on the outside and eight stories on the inside, and built atop a tall stone foundation to protect its occupants from attackers.
		</ReadMore>
	</p>
    
	<Button class = {"external-page1"} component={Link} to= "/hotel-near-osaka-castal" color="primary"><HotelIcon/></Button>
	<Button class = {"external-page2"} component={Link} to= "/osaka-castal-flight" color="primary"><FlightIcon/></Button>
	<Button class = {"external-page3"} component={Link} to= "/osaka-castle" color="primary"><RoomIcon/></Button>


	 </div>
    </div>


</div>    


);
};


export default Home;
