/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line max-classes-per-file
import React from 'react';
import './discordSite.css';
import header from './img/Discord_Header.png';
import infoOne from './img/info1.svg';
import infoTwo from './img/info2.svg';
import infoThree from './img/info3.svg';
import infoFour from './img/info4.svg';
import infoFive from './img/info5.png';
import logo from './img/logo.png';
// eslint-disable-next-line react/prefer-stateless-function
class DiscordSite extends React.Component {
  render() {
    return (
      <div className="mainpanel">
        <div className="panel1">
          <div className="panel0">
            <a href="index.html">
              <img className="logoImage" src={logo} alt="" />
            </a>
            <div className="linksDiv">
              <a className="linksDiscord" href="https://discord.com/download">Download</a>
              <a className="linksDiscord" href="https://discord.com/nitro">Nitro</a>
              <a className="linksDiscord" href="https://discord.com/safety">Safety</a>
              <a className="linksDiscord" href="https://discord.com/support">Support</a>
              <a className="linksDiscord" href="https://discord.com/blog">Blog</a>
              <a className="linksDiscord" href="https://discord.com/jobs">Careers</a>
              <button type="button" className="btn5">
                <a className="linkLogin" href="https://discord.com/login">Login</a>
              </button>
            </div>
          </div>
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
              Where hanging out is easy
            </h2>
            <h4 className="subText7">
              Grab a seat in a voice channel when you’re free. Friends in your server
              can see you’re around and instantly pop in to talk without having to call.
            </h4>
          </div>
        </div>
        <div className="panel2">
          <div className="panel3">
            {' '}
            <img className="panel3img" src={infoThree} alt="" />
            {' '}
          </div>
          <div className="panel4">
            <h2 className="subText4">
              From few to a fandom
            </h2>
            <h4 className="subText5">
              Get any community running with moderation tools and custom member access.
              Give members special powers, set up private channels, and more.
            </h4>
          </div>
        </div>
        <div className="panel9">
          <h2 className="subText8">
            RELIABLE TECH FOR STAYING CLOSE
          </h2>
          <h3 className="subText5">
            Low-latency voice and video feels like you’re in the same room. Wave hello over video,
            watch friends stream their games, or gather up and have a drawing session with
            screen share.
          </h3>
          {' '}
          <img className="panel9img" src={infoFour} alt="" />
          {' '}
          {' '}
          <img className="panel9img" src={infoFive} alt="" />
          {' '}
        </div>
        <div className="panel10">
          <button type="button" className="btnEnd">
            <a className="link2" href="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86">Download for Windows</a>
          </button>
        </div>
        <div className="panel11" />
      </div>

    );
  }
}

export default DiscordSite;
