/* global google */
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';
import html2canvas from 'html2canvas';
import trainTicket from './train-ticket.png';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker as GoogleMarker,
  Polyline,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: 51.95, lng: 0 }}
  >
    {props.children}
  </GoogleMap>
));

class TrainTracker extends Component {
  constructor() {
    super();
    this.state = { imageUrl: {trainTicket} };
    this.handlerOnClick = this.handlerOnClick.bind(this);
  }

  handlerOnClick() {
    console.log('hello world');
    console.log(document.getElementById('mapcontainer'));

      html2canvas(document.getElementById('mapcontainer')).then(canvas => {
        var image = canvas.toDataURL("image/png");
        // return image;
        // here is the most important part because if you dont replace you will get a DOM 18 exception.
        this.setState({imageUrl: image}); // it will save locally
        // document.body.appendChild(canvas);
    });
  }



    render() {
        return (
          <div onClick={() => this.handlerOnClick()}>
            <div id="mapcontainer">
            <MapWithAMarker
            ref="mainmap"
            id="mainmap"
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div id="realmap" style={{ height: `100%` }} />}
            >
        </MapWithAMarker>
        </div>
              <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
                <Marker parameters={{ preset: 'hiro' }}>
                  <Entity primitive="a-plane" src={this.state.imageUrl} rotation="-90 0 0" height="100" width="100"/>
                </Marker>
              </AFrameRenderer>
          </div>
        );
    }
}

render(<TrainTracker />, document.getElementById('root'));

export default TrainTracker;
