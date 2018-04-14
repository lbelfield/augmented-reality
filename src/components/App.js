import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

class App extends Component {
  render() {
    return (
      <AFrameRenderer arToolKit={{ sourceType: 'webcam', sourceUrl: './images/hiro_marker.png'}} >
        <Marker parameters={{ preset: 'hiro' }}>
          <a-box color="blue" material="opacity: 1;" position="0 0.09 0" scale="0.4 0.8 0.8">
            <a-animation attribute="rotation" to="360 0 0" dur="5000" easing="linear" repeat="indefinite" />
          </a-box>
        </Marker>
      </AFrameRenderer>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
