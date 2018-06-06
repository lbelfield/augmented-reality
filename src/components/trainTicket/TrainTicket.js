import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

class TrainTicket extends Component {
    render() {
        return (
          <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
            <Marker parameters={{
                preset: "pattern",
                type: "pattern",
                url: "https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt"
              }}>
              {/* Use phone to take high res pic of the train ticket
                  Use Sketch to draw the lines on the new ticket, then set the transparency behind it as 0.
                  Then export this ticket with lines as an png file, like the one in Trainline. */}
              <a-image src="https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/raw-train-ticket.png">
              </a-image>
            </Marker>
          </AFrameRenderer>
        );
    }
}

render(<TrainTicket />, document.getElementById('root'));

export default TrainTicket;
