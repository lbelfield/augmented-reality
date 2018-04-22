import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

// 'https://github.com/mattGraphics/mattGraphics.github.io/blob/master/assets/big-m.patt'
// patternUrl: 'https://github.com/lbelfield/augmented-reality/blob/master/src/components/nandos/line-pattern-marker.patt',
class Nandos extends Component {
  render() {
    return (
      <AFrameRenderer arToolKit={{ sourceType: 'webcam', sourceUrl: './line-pattern-marker.patt'}} >
        <Marker parameters={{ preset: 'custom', patternUrl: 'https://github.com/lbelfield/augmented-reality/blob/master/src/components/nandos/line-pattern-marker.patt', pattern: 'pattern' }}>
          <a-box color="blue" material="opacity: 1;" position="0 0.09 0" scale="0.4 0.8 0.8">
            <a-animation attribute="rotation" to="360 0 0" dur="5000" easing="linear" repeat="indefinite" />
          </a-box>
        </Marker>
      </AFrameRenderer>
    );
  }
}

render(<Nandos />, document.getElementById('root'));

export default Nandos;
