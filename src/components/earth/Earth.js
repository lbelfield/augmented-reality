import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

import earth from './Earth.png';

class Earth extends Component {
  render() {
    return (
      <AFrameRenderer arToolKit={{ sourceType: 'webcam', sourceUrl: './images/hiro_marker.png'}} >
        <Marker parameters={{ preset: 'hiro' }}>
          <a-sphere src="https://raw.githubusercontent.com/aframevr/sample-assets/master/assets/images/space/earth_atmos_4096.jpg" radius="1" segments-height="53">
            <a-animation
              attribute="rotation"
              dur="3000"
              from="-10 0 0"
              to="-10 0 0"
              easing="linear"
              repeat="indefinite"
            />
          </a-sphere>
        </Marker>
      </AFrameRenderer>
    );
  }
}

render(<Earth />, document.getElementById('root'));

export default Earth;
