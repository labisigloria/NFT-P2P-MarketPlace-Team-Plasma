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
import splitopen from "../images/splitopen.png"
import ellipse from "../images/Ellipse.png"
import spacecraft from "../images/spacecraft.png"
import fill from "../images/Fill 1.png" 
import ETH from "../images/Icon - ETH.png"
import carbon from "../images/carbon_time.png"

class Swap extends React.Component{
    render(){
        return(
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
                    
                
                    <div class="">
                    <div class="swapdash-align">
                        <div class="swapdash">
                            <div class="testify split-open">
                                <div class="testimonials">
                                    <img src= {splitopen} class="spacecraft" alt=" " />
                                    <div class="profile">
                                        <h3>Splitopen</h3>
                                        <p>You are in your head, you want everyone to see how you feel, your thoughts towards things.</p>
                                        <div class="fix">
                                            <img src= {ellipse} alt=" s" />
                                            <div class="dunne">
                                                <h5>@Dune</h5>
                                                <p>creator</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="network">
                                    <img src= {fill} alt= " "/>
                                    <p>0xag5...pls |</p>
                                    <img src= {ETH} alt=" " />
                                    <p>0.00 ETH |</p>
                                    <p>Total NFTs = 1 |</p>
                                    <img src={carbon} alt="clock icon" />
                                    <p>20hrs : 15min : 25sec</p>
                                </div>

                            </div>
                            <button class="users-button swapdash-btn" onclick="toggle()">Make a Swap</button>
                        </div>



                        <div class="swap-logo">
                            <img src={logo} alt="logo" />
                        </div>



                        <div class="swapdash-align">
                            <div class="swapdash">
                                <div class="testify split-open">
                                    <div class="testimonials">
                                        <img src={spacecraft} class="spacecraft" alt="spacecraft" />
                                        <div class="profile">
                                            <h3>Spacecraft</h3>
                                            <p>You are in your head, you want everyone to see how you feel, your thoughts towards things.</p>
                                            <div class="fix">
                                                <img src={ellipse} alt=" " />
                                                <div class="dunne">
                                                    <h5>@Dune</h5>
                                                    <p>creator</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="network">
                                        <img src={fill} alt=" " />
                                        <p>0xag5...pls |</p>
                                        <img src={ETH} alt=" " />
                                        <p>0.00 ETH |</p>
                                        <p>Total NFTs = 1 |</p>
                                        <img src={carbon} alt="clock icon" />
                                        <p>20hrs : 15min : 25sec</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
                
                
                <div class="popup">
                    <button class="close-btn" onclick="toggle()">&times;</button>
                    <img src="./images/logo 2.png" alt="plasma logo" class="popup-logo" />
                    <div class="connect">
                        <h3>Select NFT to swap with</h3>
                        <p>You shall be redirected to “your NFTs” to select item</p>
                        <button class="proceed-btn" onclick="toggle()">Proceed</button>
                    </div>
                </div>
                <div class="popup">
                    <button class="close-btn" onclick="toggle()">&times;</button>
                    <img src="./images/logo 2.png" alt="plasma logo" class="popup-logo" />
                    <div class="connect">
                        <h3>Spacecraft for Splitopen</h3>
                        <p>Your offer will be sent to the creator</p>
                        <button class="proceed-btn" onclick="toggle()">Proceed</button>
                    </div>
                </div></> 
        

        )
    }
}
export default Swap;