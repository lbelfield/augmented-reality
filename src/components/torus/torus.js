import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

class Torus extends Component {
  render() {
    return (
      <AFrameRenderer arToolKit={{ sourceType: 'webcam', trackingMethod: "tango" }} inherent={true}>
        <Marker parameters={{ preset: "hiro", "hit-testing-enabled": true }}>
            <a-box position='0 0.5 0' material='opacity: 0.5; side:double; color:red;'>
            <a-torus-knot radius='0.26' radius-tubular='0.05'>
              <a-animation attribute="rotation" to="360 0 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
            </a-torus-knot>
          </a-box>
        </Marker>
        <Marker parameters={{ preset: "kanji", "hit-testing-enabled": true }}>
          <a-box position='0 0.5 0' material='opacity: 0.2; side:double; color:blue;'>
            <a-octahedron opacity='0.5' radius='0.6' radius-tubular='0.05' color='yellow'>
              <a-animation attribute="rotation" to="0 360 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
            </a-octahedron>
            <a-octahedron radius='0.26' radius-tubular='0.05' color='white'>
              <a-animation attribute="rotation" to="360 0 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
            </a-octahedron>
          </a-box>
        </Marker>
      </AFrameRenderer>
    );
  }
}

render(<Torus />, document.getElementById('root'));

export default Torus;
