/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line max-classes-per-file
import React from 'react';
import './discordSite.css';

// eslint-disable-next-line react/prefer-stateless-function
class DiscordSite extends React.Component {
  render() {
    return (
      <div className="mainpanel">
        <div className="panel1">
          <img className="panel1img" src="https://techcrunch.com/wp-content/uploads/2021/05/Discord_IAP_KeyVisuals_Header_02.jpeg" />
          <div className="panel2">
            <p>This is some text in a div element.</p>
            <div className="panel3">
              <p>This is some text in a div element.</p>
              <div className="panel4">
                <p>This is some text in a div element.</p>
                <div className="panel5">
                  <p>This is some text in a div element.</p>
                  <div className="panel6">
                    <p>This is some text in a div element.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default DiscordSite;
