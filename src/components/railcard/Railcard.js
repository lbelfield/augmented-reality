import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';
import journeySummaryImage from './journey-summary.png';
import trainTicket from './train-ticket.png';

class Railcard extends Component {
    render() {
        return (
          <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
            <Marker parameters={{
                preset: "pattern",
                type: "pattern",
                url: "https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt"
              }}>
              <a-assets-item img id="journeySummaryImage" src={journeySummaryImage} />
              <a-assets-item img id="trainTicket" src={trainTicket} />

              <a-entity camera look-controls mouse-cursor>
                <a-entity
                  cursor="fuse: true; fuseTimeout: 500"
                  // position="0 0 -1"
                  id="box"
                  cursor-listener
                  geometry="primitive: box"
                  material="shader: flat; src: #journeySummaryImage">
                </a-entity>
              </a-entity>

            </Marker>
          </AFrameRenderer>
        );
    }
}

render(<Railcard />, document.getElementById('root'));

export default Railcard;
