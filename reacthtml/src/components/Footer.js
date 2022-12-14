import React from "react";
import twitter from "../images/twitter icon.png"
import instagram from "../images/IG Icon.png"
import telegram from "../images/telegram.png"
import discord from "../images/discord.png"
import slack from "../images/slack.png"
import youtube from "../images/youtube.png"

class Footer extends React.Component {
    render() {
        return(
            <footer>
            <div class="channel">
                <div class="subscribe">
                    <h3>Stay in the loop</h3>
                    <p>By subscribing to our email list, you may be the first to learn about our newest updates, features, swappable NFTs, and helpful hints for using Plasma swap.</p>
                    <input type="email" name="email" placeholder="Your email address" /><button class="sub-btn">Subscribe</button>
                </div>
    
                <div class="community">
                    <h3>Join the Community</h3>
                    <p>By subscribing to our email list, you may be the first to learn about our newest updates, features, swappable NFTs, and helpful hints for using Plasma swap.</p>
                    <div class="social-handles">
                        <a href="twitter"><img src= {twitter} alt="twitter icon" /></a>
                        <a href="IG"><img src= {instagram} alt="instagram icon" /></a>
                        <a href="telegram"><img src= {telegram} alt="telegram icon" /></a>
                        <a href="discord"><img src= {discord} alt="discord icon" /></a>
                        <a href="slack"><img src= {slack} alt="slack icon" /></a>
                        <a href="youtube"><img src= {youtube} alt="youtube icon" /></a>
                    </div>
                </div>
            </div>
            <hr />
                <div class="overview">
                    <div class="plasma-footer">
                        <div class="footer-logo">
                        <img src="./images/logo 2.png" alt="plasma logo" />
                        </div>
                        <p>An online digital platform for peer to peer swap of Non-Fungible Tokens (NFTs)
                            Discover exclusive digital items and make that swap.</p>
                    </div>
    
                    <div class="know-us">
                        <ul class="plasmas">
                            <li class="bold-heading">Company</li>
                            <li><a href="about">About us</a></li>
                            <li><a href="support">Support</a></li>
                            <li><a href="feedback">Feedback</a></li>
                            <li><a href="grants">Grants</a></li>
                            <li><a href="FAQ">FAQ</a></li>
                        </ul>
    
                        <ul class="plasmas">
                            
                            <li class="bold-heading">Marketplace</li>
                            <li><a href="NFTS">All NFTs</a></li>
                            <li><a href="art">Art</a></li>
                            <li><a href="music">Music</a></li>
                            <li><a href="photography">Photography</a></li>
                            <li><a href="sports">Sports</a></li>
                        </ul>
    
                        
                        <ul class="plasmas">
                            <li class="bold-heading">Initiatives</li>
                            <li><a href="resources">Resources</a></li>
                            <li><a href="newsletter">Newsletters</a></li>
                            <li><a href="community">Community</a></li>
                            <li><a href="program">Advocate program</a></li>
                            <li><a href="blog">Blog</a></li>
                        </ul>
    
                        
                        <ul class="plasmas">
                            <li class="bold-heading">Community</li>
                            <li><a href="profile">Profile</a></li>
                            <li><a href="favorites">Favorites</a></li>
                            <li><a href="swaps">Swaps</a></li>
                            <li><a href="ranking">Ranking</a></li>
                            <li><a href="activity">Activity</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
    
                <p class="footer-p">2022 Plasma swap</p>
            
        </footer>
        )
    }
}

export default Footer;