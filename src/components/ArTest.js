/* global google */


import React, { Component } from "react";
import { render } from "react-dom";

import { AFrameRenderer, Marker } from "react-web-ar";
import {Entity, Scene} from 'aframe-react';
import journeySummary from './trainTracker/journey-summary.png'
import html2canvas from 'html2canvas';

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker as GoogleMarker,
  Polyline,
} from "react-google-maps";
/**
 * In this example, we use multiple independent markers.
 */

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibGJlbGZpZWxkIiwiYSI6ImNqa2EyczdsczF0Y3UzcGszMng1YTg4ZDEifQ.Neck0HxIid4A1G5tUAKHAw"
});

// in render()


class MultiMarker extends Component {
  constructor(){
    super();
    this.state = {imageUrl: 'https://raw.githubusercontent.com/aframevr/sample-assets/master/assets/images/space/earth_atmos_4096.jpg', PlaneEntity: null}
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(){
    // this.setState({imageUrl: 'https://www.mapbox.com/help/img/react-native/first-steps/show-user-location-android.png'});
    // this.setState({imageUrl: journeySummary});

    console.log(document.getElementById('realmap'));

      var map = document.getElementsByClassName('mapboxgl-canvas')[0];
      // var map = document.querySelector("#map canvas");
      console.log(typeof(map));
      var canvasUrl = map.toDataURL();

      const thisEntity = <Entity primitive="a-plane" src={canvasUrl} rotation="-90 0 0" height="100" width="100"/>
      this.setState({PlaneEntity: thisEntity});
    //   html2canvas(document.getElementsByClassName('mapboxgl-canvas')[0]).then(canvas => {
    //     var image = canvas.toDataURL("image/png");
    //     // return image;
    //     // here is the most important part because if you dont replace you will get a DOM 18 exception.
    //     this.setState({imageUrl: image}); // it will save locally
    //     // document.body.appendChild(canvas);
    // });
  }

  render() {
    return (
      <div onClick={() => this.handleOnClick()}>
      <Map
      id="realmap"
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: "100vh",
    width: "100vw"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
</Map>
      <AFrameRenderer
        arToolKit={{
          sourceType: "webcam"
        }}
        getSceneRef={ref => (this.scene = ref)}
        inherent={true}
      >
        <Marker parameters={{ preset: "hiro" }}>
          {this.state.PlaneEntity != null ? this.state.PlaneEntity :<br/>}
          <Entity primitive="a-plane" src={this.state.imageUrl} rotation="-90 0 0" height="100" width="100"/>
          <a-box color="blue" position="0 0.09 0" scale="0.4 0.8 0.8">
            <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="2000"
              easing="linear"
              repeat="indefinite"
            />
          </a-box>
        </Marker>
        <Marker parameters={{ preset: "kanji" }}>
          <a-box color="red" position="0 0.09 0" scale="0.4 0.8 0.8">
            <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="2000"
              easing="linear"
              repeat="indefinite"
            />
          </a-box>
        </Marker>
      </AFrameRenderer>
      </div>
    );
  }
}


export default MultiMarker;
