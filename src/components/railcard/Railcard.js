import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';
import appTicket from './app-ticket.png';
import journeyDetails from './journey-details.png';
import informationIcon from './information-icon.png';
import trainIcon from './train-icon.png';
import userProfile from './user-profile.png';

class Railcard extends Component {
    render() {
        return (
          <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
            <Marker parameters={{
                preset: "pattern",
                type: "pattern",
                url: "https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt"
              }}>
              <a-assets-item img id="appTicket" src={appTicket} />
              <a-assets-item img id="journeyDetails" src={journeyDetails} />
              <a-assets-item img id="informationIcon" src={informationIcon} />
              <a-assets-item img id="trainIcon" src={trainIcon} />
              <a-assets-item img id="userProfile" src={userProfile} />

              <a-entity camera look-controls mouse-cursor>
                <a-entity
                  id="ticket"
                  ticket-listener
                  cursor="fuse: true; fuseTimeout: 500"
                  position="1 0 0"
                  geometry="primitive: box; height: 0.1; depth: 1.5; rotation: 90 0 0;"
                  material="shader: flat;"
                  visible="false">
                  <a-animation attribute="position"
                    dur="3000"
                    begin="ticketAnimation"
                    from="0 0 0"
                    to="1 0 0"/>
                </a-entity>

                <a-entity
                  id="journey-details"
                  journey-details-listener
                  cursor="fuse: true; fuseTimeout: 500"
                  position="2 0 0"
                  geometry="primitive: box; height: 0.1; depth: 1.5; rotation: 90 0 0;"
                  material="shader: flat; src: #journeyDetails"
                  visible="false">
                  <a-animation attribute="position"
                    dur="3000"
                    begin="journeyDetailsAnimation"
                    from="1 0.1 0"
                    to="2 0.01 0"/>
                </a-entity>

                <a-entity
                  id="cylinder-info-icon"
                  cylinder-info-icon-listener
                  cursor="fuse: true; fuseTimeout: 500"
                  position="-0.25 0.1 0.5"
                  geometry="primitive: cylinder; height: 0.1; radius: 0.15"
                  material="shader: flat; src: #informationIcon" />

                  <a-entity
                  id="cylinder-train-icon"
                  cylinder-train-icon-listener
                  cursor="fuse: true; fuseTimeout: 500"
                  position="0.25 0.1 0.5"
                  geometry="primitive: cylinder; height: 0.1; radius: 0.15"
                  material="shader: flat; src: #trainIcon" />

              </a-entity>

            </Marker>
          </AFrameRenderer>
        );
    }
}

render(<Railcard />, document.getElementById('root'));

export default Railcard;
