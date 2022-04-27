/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line max-classes-per-file
import React from 'react';
import './discordSite.css';
import header from './img/Discord_Header.png';
import infoOne from './img/info1.svg';
import infoTwo from './img/info2.svg';
// eslint-disable-next-line react/prefer-stateless-function
class DiscordSite extends React.Component {
  render() {
    return (
      <div className="mainpanel">
        <div className="panel1">
          <h1 className="subText1">IMAGINE A PLACE...</h1>
          <h2 className="subText3">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h2>
          <img className="panel1img" src={header} alt="" />
          <div className="subPanel1" />
          <div className="subPanel3">
            <button type="button" className="btn">
              <a className="link" href="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86">Download for Windows</a>
            </button>
            <button type="button" className="btn2">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="panel2">
          <div className="panel3">
            {' '}
            <img className="panel3img" src={infoOne} alt="" />
            {' '}
          </div>
          <div className="panel4">
            <h2 className="subText4">
              Create an
              invite-only
              place where you
              belong
            </h2>
            <h4 className="subText5">
              Discord servers are organized into topic-based channels where you can collaborate,
              share, and just talk about your day without clogging up a group chat.
            </h4>
          </div>
        </div>
        <div className="panel5">
          <div className="panel6">
            {' '}
            <img className="panel6img" src={infoTwo} alt="" />
            {' '}
          </div>
          <div className="panel7">
            <h2 className="subText6">
              Create an
              invite-only
              place where you
              belong
            </h2>
            <h4 className="subText7">
              Discord servers are organized into topic-based channels where you can collaborate,
              share, and just talk about your day without clogging up a group chat.
            </h4>
          </div>
        </div>
      </div>

    );
  }
}

export default DiscordSite;
