import React from "react";

class Nfts extends React.Component {
  render() {
    return (
      <div class="dashboard">
        <div class="board">
          <img src="./images/logo 2.png" alt="plasma logo" />
          <ul class="board-list">
            <li class="board-menu">
              <a href="/dashboard">
                <img src="./images/dashboard.png" class="icons" alt="icons" />{" "}
                dashboard
              </a>
            </li>
            <li class="board-menu">
              <a href="/Nfts">
                <img src="./images/NFTS.png" class="icons" alt="icons" /> Your
                NFTs
              </a>
            </li>
            <li class="board-menu">
              <a href="/swap">
                <img src="./images/SWAPS.png" class="icons" alt="icons" /> swaps
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img src="./images/INSIGHTS.png" class="icons" alt="icons" />{" "}
                insights
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img src="./images/analytics.png" class="icons" alt="icons" />{" "}
                analytics
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img
                  src="./images/Notification.png"
                  class="icons"
                  alt="icons"
                />{" "}
                notifications
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img src="./images/settings.png" class="icons" alt="icons" />{" "}
                settings
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <img src="./images/help.png" class="icons" alt="icons" /> help
              </a>
            </li>
            <li class="board-menu">
              <a href=" ">
                <button class="board-btn">create swap</button>
              </a>
            </li>
            <li class="board-menu" id="logout">
              <a href="/logout">
                <img src="./images/logout.png" class="icons" alt="icons" />
                log out
              </a>
            </li>
          </ul>
        </div>

        <div class="main-board">
          <div class="board-nav">
            <input
              type="search"
              name="search"
              placeholder="search items and accounts"
            />
            <div class="splash">
              <img src="./images/unsplash.png" class="unsplash" alt=" " />
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
            <div class="cards dash-cards">
              <div class="users">
                <img src="./images/spacecraft.png" alt=" " />
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
                <img src="./images/Kung fu.png" alt="kungfu img" />
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
                <img src="./images/detached.png" alt="detached" />
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
                <img src="./images/groot2.png" alt="cyber img" />
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
                <img src="./images/scoobydoo.png" alt="detached" />
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
                <img src="./images/bugsbunny.png" alt=" " />
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

        <div class="popup">
          <button class="close-btn" onclick="toggle()">
            &times;
          </button>
          <img src="./images/logo 2.png" alt="plasma logo" class="popup-logo" />
          <div class="connect">
            <h3>Spacecraft</h3>
            <p>You have selected “space craft” to be swapped</p>
            <button class="proceed-btn proceed2" onclick="toggle()">
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Nfts;
