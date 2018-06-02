import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

class RollingScopes extends Component {
    render() {
        return (
          <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
            <Marker parameters={{
                preset: "pattern",
                type: "pattern",
                url: "https://raw.githubusercontent.com/tlakomy/react-ar-demos/master/src/rollingscopes.patt"
              }}>
              <a-box position="0 0.5 0" material="opacity: 0.5; side: double; color: #CA83FF;">
                <a-torus-knot radius="0.26" radius-tubular="0.05">
                  <a-animation attribute="rotation" to="360 0 0" dur="3000" easing="linear" repeat="indefinite" />
                </a-torus-knot>
              </a-box>
            </Marker>
          </AFrameRenderer>
        );
    }
}

render(<RollingScopes />, document.getElementById('root'));

export default RollingScopes;
