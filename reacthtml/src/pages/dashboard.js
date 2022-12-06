import React from "react";

class dashboard extends React.Component{
    render() {
        return(
            <div class="dashboard">
            <div class="board">
                <img src="./images/logo 2.png" alt="plasma logo" />
                <ul class="board-list">
                    <li class="board-menu"><a href="dashboard.html"><img src="./images/dashboard.png" class="icons" alt="icons"/> dashboard</a></li>
                    <li class="board-menu"><a href="Nfts.html"><img src="./images/NFTS.png" class="icons" alt="icons"/> Your NFTs</a></li>
                    <li class="board-menu"><a href="swap.html"><img src="./images/SWAPS.png" class="icons" alt="icons"/> swaps</a></li>
                    <li class="board-menu"><a href=" "><img src="./images/INSIGHTS.png" class="icons" alt="icons"/> insights</a></li>
                    <li class="board-menu"><a href=" "><img src="./images/analytics.png" class="icons" alt="icons"/> analytics</a></li>
                    <li class="board-menu"><a href=" "><img src="./images/Notification.png" class="icons" alt="icons"/> notifications</a></li>
                    <li class="board-menu"><a href=" "><img src="./images/settings.png" class="icons" alt="icons"/> settings</a></li>
                    <li class="board-menu"><a href=" "><img src="./images/help.png" class="icons" alt="icons"/> help</a></li>
                    <li class="board-menu"><a href=" "><button class="board-btn">create swap</button></a></li>
                    <li class="board-menu" id="logout"><a href=" "><img src="./images/logout.png" class="icons" alt="icons"/>log out</a></li>
                </ul>
            </div>
    
            <div class="main-board">
                <div class="board-nav">
                    <form method="get" class="search-bar">
                    <button type="submit"><img src="./images/search icon.png" alt="search icon" /></button>
                    <input type="search" name="search" placeholder="search items and accounts" /></form>
                    <div class="splash">
                        <img src="./images/unsplash.png" class="unsplash" alt=" "/>
                        <div class="bolts">
                        <h5>Maggie Bolts</h5>
                        <p>0xag54...2pls</p></div>
                        
    
                    </div>
                </div>
    
                <div class="align-swap">
                <div class="design-swap">
                    <div class="select-swap">
                        <a href=" "><button class="select-swap"><h3>create swap</h3><p>select your nft to advertise</p></button></a>
                    </div>
                    <div class="make-swap">
                        <a href=" "><button class="make-swap"><h3>make swap</h3><p>view advertised NFTs for swap</p></button></a>
                    </div>
                    <div class="completed-swap">
                        <a href=" "><button class="completed-swap"><h3>completed swap</h3><p>view swaps that have happened</p></button></a>
                    </div>
                </div>
    
                
                    <div class="advertise">
                        <h2>Advertised NFTs</h2>
                        <a href=" ">Show all </a>
                    </div>
                    <div class="cards dash-cards">
                        <div class="users">
                            <img src="./images/splitopen.png" alt="splitopen img" />
                            <h5>Splitopen</h5>
                            <p> You are in your head, you want everyone to see how you feel, your thoughts towards things.</p>
                            <div class="creator" id="creator1">
                                <img src="./images/Ellipse.png" alt="ellipse" />
                                <div class="dunne">
                                    <h5>@Dune</h5>
                                    <p>creator</p>
                                </div>
                                <span>22hrs:15min:25sec</span>
                            </div>
                            <button class="users-button">Make a Swap</button>
                        </div>
    
                        <div class="users">
                            <img src="./images/spaceimpact.png" alt="space"/>
                            <h5>Spaceimpact</h5>
                            <p>The universe is wide, encounter space within the metaverse. Take a deep dive into what exists in the alternate universe.</p>
                            <div class="creator">
                                <img src="./images/Ellipse.png" alt=" " />
                                <div class="dunne">
                                    <h5>@Lois</h5>
                                    <p>creator</p>
                                </div>
                                <span>21hrs:15min:20sec</span>
                            </div>
                            <button class="users-button">Make a Swap</button>
                        </div>
    
                        <div class="users">
                            <img src="./images/astronaut.png" alt=" " />
                            <h5>Astronaut</h5>
                            <p> You are in your head, you want everyone to see how you feel, your thoughts towards things.</p>
                            <div class="creator" id="creator8">
                                <img src="./images/Ellipse.png" alt=" " />
                                <div class="dunne">
                                    <h5>@Bigfoot</h5>
                                    <p>creator</p>
                                </div>
                                <span>48hrs:15min:25sec</span>
                            </div>
                            <button class="users-button">Make a Swap</button>
                        </div>
                    </div>
    
                        <div class="advertise">
                        <h2>Your NFTs</h2>
                        </div>
                    <div class="cards dash-cards">
                        <div class="users">
                            <img src="./images/spacecraft.png" alt=" "/>
                            <h5>Spacecraft</h5>
                            <p>You are in your head, you want everyone to see how you feel, your thoughts towards things.</p>
                            <div class="creator">
                               <a href=" ">Create swap</a>
                            </div>
                            <button class="users-button">Make a Swap</button>
                        </div>
            
                        <div class="users">
                            <img src="./images/Kung fu.png" alt="kungfu img" />
                            <h5>Kungfu</h5>
                            <p>Making every stride a lovely one while defending oneself. When you perceive a threat, you apply master Shifu’s teachings.</p>
                            <div class="creator">
                                <a href=" ">Create swap</a>
                            </div>
                            <button class="users-button">Make a Swap</button>
                        </div>
    
                        <div class="users">
                            <img src="./images/detached.png" alt="detached" />
                            <h5>Detached</h5>
                            <p>Making every stride a lovely one while defending oneself. When you perceive a threat, you apply master Shifu’s teachings.</p>
                            <div class="creator">
                                <a href=" ">Create swap</a>
                            </div>
                            <button class="users-button">Make a Swap</button>
                        </div>
            
                        <div class="users">
                            <img src="./images/cyber.png" alt="cyber img" />
                            <h5>Groot</h5>
                            <p>You are in your head, you want everyone to see how you feel, your thoughts towards things.</p>
                            <div class="creator">
                                <a href=" ">Create swap</a>
                            </div>
                            <button class="users-button">Make a Swap</button>
                        </div>
            
                        <div class="users">
                            <img src="./images/detached.png" alt="detached" />
                            <h5>SkoobyDoo</h5>
                            <p>You are in your head, you want everyone to see how you feel, your thoughts towards things.</p>
                            <div class="creator">
                                <a href=" ">Create swap</a>
                            </div>
                            <button class="users-button">Make a Swap</button>
                        </div>
            
                        <div class="users">
                            <img src="./images/sipping.png" alt=" "/>
                            <h5>BugsBunny</h5>
                            <p> You are in your head, you want everyone to see how you feel, your thoughts towards things.</p>
                            <div class="creator">
                                <a href=" ">Create swap</a> 
                            </div>
                            <button class="users-button">Make a Swap</button>
                        </div>
            
                    </div>
                        </div> 
                        
                    </div>
                    </div>
                
    
        
        )
    }
}

export default dashboard;