// jshint esversion: 6
import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { environment } from "../environment/environment";

const style = {
 borderRadius: '10px',
 height: '400px',
 width: '700px',
}

class MapContainer extends React.Component {
 constructor(props) {
  super(props);
  this.handleMapReady = this.handleMapReady.bind(this);
 }

 handleMapReady(mapProps, map) {
  this.calculateAndDisplayRoute(map);
 }

 calculateAndDisplayRoute(map) {
  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);

  // tslint:disable-next-line:no-console
  console.log(this.props.google, ' estas son las props de google');


  const waypoints = this.props.data.map(item => {
   return {
    location: { lat: item.lat, lng: item.lng },
    stopover: true
   }
  })
  const origin = waypoints.shift().location;
  const destination = waypoints.pop().location;

  directionsService.route({
   destination: destination,
   origin: origin,
   travelMode: 'DRIVING',
   waypoints: waypoints,
  }, (response, status) => {
   if (status === 'OK') {
    directionsDisplay.setDirections(response);
   } else {
    window.alert('Directions request failed due to ' + status);
   }
  });
 }

 render() {
  return (
   <div>
    <Map
     google={this.props.google}
     style={style}
     zoom={this.props.zoom}
     initialCenter={this.props.center}
     onReady={this.handleMapReady}
     className={'map'}
    />
   </div>
  );
 }
}

export default GoogleApiWrapper({
 apiKey: environment.GOOGLE_MAPS.API_KEY_GOOGLE_MAPS,
 libraries: []
})(MapContainer);
