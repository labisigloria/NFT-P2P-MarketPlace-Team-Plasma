import React from 'react'
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


function board() {
  return (
    
        <><div class="board">
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
                  <a href="/swap">
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
            </div>
        </div>
        </>

    
  )
}

export default board