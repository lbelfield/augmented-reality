import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';
import journeySummaryImage from './journey-summary.png';

class TrainTicket extends Component {
    render() {
        return (
          <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
            <Marker parameters={{
                preset: "pattern",
                type: "pattern",
                url: "https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt"
              }}>

              <a-assets-item img id="journeySummaryImage" src={journeySummaryImage} />

              <a-entity
                geometry="primitive: box; height: 0.1;"
                material="shader: flat; src: #journeySummaryImage" />

            </Marker>
          </AFrameRenderer>
        );
    }
}

render(<TrainTicket />, document.getElementById('root'));

export default TrainTicket;
