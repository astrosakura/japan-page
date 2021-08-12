// import React, { Component } from "react";
// import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// class Demo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Map
//           google={this.props.google}
//           zoom={10}
//           style={mapStyles}
//           initialCenter={{
//             lat: "20.937424",
//             lng: "77.779549"
//           }}
//         >
//          <Marker
//           onClick={this.onMarkerClick}
//           name={'This is test name'}
//         />
//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyD0jtUncqUs-y3gwBelsn5iJK5H1MUV2Mc'
// })(Demo);


import React, { useRef, useState } from 'react';
import "./Map.css";
import { MapContainer, Marker, TileLayer, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import osm from "./osm-provider";
import useGeolocation from './useGeolocation';
import L from "leaflet";
import HomeIcon from '@material-ui/icons/Home';
import {Redirect} from "react-router-dom";





const markerIcon = new L.Icon({
    iconUrl: ("https://lh3.googleusercontent.com/proxy/imWnmJxXnyvy6hPvltX2jv7ixCd-5KGquZJMlQrzMXG2h9y3QPhtQ0ps-YsYDg33bXygsyEk8RpQB8TCvotZ30m-gxrBsUK-lsLL4f2A4IStYiz89m7brEGui2Ya1BJP_nBQXB7TfL-vDfzHb1KrXz_fT8YKlUZF-MKv04YtZ1UBFM0wzJoBCwZuKRySkUGZFwRiWfv0OXNG5xZ-h4Yk=s0-d"),      //require(img1),
    iconSize: [25, 30],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
});

const MountFujiRoute = () => {
    const [center, setCenter] = useState({lat: 19.8762, lng:75.6493});
    const ZOOM_LEVEL = 6;
    const mapRef = useRef();
    const location = useGeolocation();
    

      const [isAuth, setIsAuth] = useState(true);
    if(!isAuth) {
	return <Redirect to = "/"/>
}

    
    return (
        <>
        <div className = "header" >
        <h3 className = "home-icon" onClick={() => setIsAuth(false)}><HomeIcon fontSize = "large"/><br/>Home</h3><br/>
            </div>
        <div class="card">
       <div class="container">
    
        <div className = "row">
            <MapContainer
               center = {center} 
               zoom = {ZOOM_LEVEL} 
               ref = {mapRef}>
            
              
             <TileLayer url ={osm.maptiler.url} attribution = {osm.maptiler.attribution}/>

           
           
             {location.loaded && !location.error && (
              <Marker 
              icon= {markerIcon}
               position = {[
                   location.coordinates.lat,
                    location.coordinates.lng
                ]}
                
               >
                
              </Marker>
             )}

             <Marker  position = {[35.6933, 138.6873]} icon = {markerIcon}>
                <Popup><b>Yamanashi, Japan</b></Popup>
             </Marker>

             
            </MapContainer>
            </div>

             </div>
             </div>
           
             
        </>
    );
};

export default MountFujiRoute
