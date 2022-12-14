import React from "react";
import logo from "../images/logo 2.png"
import dashboard from "../images/dashboard.png"
import nfts from "../images/NFTS.png"
import swaps from "../images/SWAPS.png"
import insights from "../images/INSIGHTS.png"
import analytics from "../images/analytics.png"
import notification from "../images/Notification.png"
import settings from "../images/settings.png"
import help from "../images/help.png"
import logout from "../images/logout.png"
import search from "../images/search icon.png"
import unsplash from "../images/unsplash.png"
import spacecraft from "../images/spacecraft.png"
import kungfu from "../images/Kung fu.png"
import detached from "../images/detached.png"
import groot2 from "../images/groot2.png"
import scoobydoo from "../images/scoobydoo.png"
import bugsbunny from "../images/bugsbunny.png" 

class Nfts extends React.Component {
  render() {
    return (
      <><div class="dashboard">
        <div class="board">
          <img src={logo} alt="plasma logo" />
          <ul class="board-list">
            <li class="board-menu">
              <a href="/dashboard">
                <img src={dashboard} class="icons" alt="icons" />{" "}
                dashboard
              </a>
            </li>
            <li class="board-menu">
              <a href="/Nfts">
                <img src={nfts} class="icons" alt="icons" /> Your
                NFTs
              </a>
            </li>
            <li class="board-menu">
              <a href="/Swap">
                <img src={swaps} class="icons" alt="icons" /> swaps
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img src={insights} class="icons" alt="icons" />{" "}
                insights
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img src={analytics} class="icons" alt="icons" />{" "}
                analytics
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img
                  src={notification}
                  class="icons"
                  alt="icons" />{" "}
                notifications
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img src={settings} class="icons" alt="icons" />{" "}
                settings
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img src={help} class="icons" alt="icons" /> help
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <button class="board-btn">create swap</button>
              </a>
            </li>
            <li class="board-menu" id="logout">
              <a href=" ">
                <img src={logout} class="icons" alt="icons" />
                log out
              </a>
            </li>
          </ul>
        </div>

          <div class="main-board">
            <div class="board-nav">
              <form method="get" class="search-bar">
                <button type="submit">
                  <img src={search} alt="search icon" />
                </button>
                <input
                  type="search"
                  name="search"
                  placeholder="search items and accounts" />
              </form>
              <div class="splash">
                <img src={unsplash} class="unsplash" alt=" " />
                <div class="bolts">
                  <h5>Maggie Bolts</h5>
                  <p>0xag54...2pls</p>
                </div>
              </div>
            </div>
          
        


        <div class="align-swap">
          <div class="advertise">
            <h2>Your NFTs</h2>
          </div>
          <div class="cards dash-cards">sss
            <div class="users">
              <img src= {spacecraft} alt=" " />
              <h5>Spacecraft</h5>
              <p>
                You are in your head, you want everyone to see how you feel,
                your thoughts towards things.
              </p>
              <div class="creator">
                <a href=" ">Create swap</a>
              </div>
              <button class="users-button">Make a Swap</button>
            </div>

            <div class="users">
              <img src= {kungfu} alt="kungfu img" />
              <h5>Kungfu</h5>
              <p>
                Making every stride a lovely one while defending oneself. When
                you perceive a threat, you apply master Shifu’s teachings.
              </p>
              <div class="creator">
                <a href=" ">Create swap</a>
              </div>
              <button class="users-button">Make a Swap</button>
            </div>

            <div class="users">
              <img src={detached} alt="detached" />
              <h5>Detached</h5>
              <p>
                Making every stride a lovely one while defending oneself. When
                you perceive a threat, you apply master Shifu’s teachings.
              </p>
              <div class="creator">
                <a href=" ">Create swap</a>
              </div>
              <button class="users-button">Make a Swap</button>
            </div>

            <div class="users">
              <img src= {groot2} alt="cyber img" />
              <h5>Groot</h5>
              <p>
                You are in your head, you want everyone to see how you feel,
                your thoughts towards things.
              </p>
              <div class="creator">
                <a href=" ">Create swap</a>
              </div>
              <button class="users-button">Make a Swap</button>
            </div>

            <div class="users">
              <img src= {scoobydoo} alt="detached" />
              <h5>SkoobyDoo</h5>
              <p>
                You are in your head, you want everyone to see how you feel,
                your thoughts towards things.
              </p>
              <div class="creator">
                <a href=" ">Create swap</a>
              </div>
              <button class="users-button">Make a Swap</button>
            </div>

            <div class="users">
              <img src={bugsbunny} alt=" " />
              <h5>BugsBunny</h5>
              <p>
                {" "}
                You are in your head, you want everyone to see how you feel,
                your thoughts towards things.
              </p>
              <div class="creator">
                <a href=" ">Create swap</a>
              </div>
              <button class="users-button">Make a Swap</button>
            </div>
          </div>
        </div>
      </div>
     </div>
    

      <div class="popup">
          <button class="close-btn" onclick="toggle()">
            &times;
          </button>
          <img src= {logo}  alt="plasma logo" class="popup-logo" />
          <div class="connect">
            <h3>Spacecraft</h3>
            <p>You have selected “space craft” to be swapped</p>
            <button class="proceed-btn proceed2" onclick="toggle()">
              Proceed
            </button>
          </div>
      </div></>
        
      
      
    );
  }
}

export default Nfts;
