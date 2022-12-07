import React from "react";
import { Link } from "react-router-dom";
import vector31 from "../images/Vector 31.svg"
import frame2 from "../images/Frame 2.png"
import filter from "../images/Filter.png"
import splitopen from "../images/splitopen.png"
import ellipse from "../images/Ellipse.png" 
import kungfu from "../images/Kung fu.png"
import spaceimpact from "../images/spaceimpact.png"
import cyber from "../images/cyber.png"
import detached from "../images/detached.png"
import spacecraft from "../images/spacecraft.png"
import sipping from "../images/sipping.png"
import astronaut from "../images/astronaut.png"
import frame3 from "../images/Frame 3.png"
import ghostrider from "../images/ghostrider.png" 
import fill from "../images/Fill 1.png"
import ETH from "../images/Icon - ETH.png"
import carbon from "../images/carbon_time.png"
import logo from "../images/logo.png"
import lois from "../images/LOIS.png"
import simpson from "../images/simpson.png"
import groot from "../images/groot.png"




class Home extends React.Component {
  render() {
    return (
      <>
        <main>
          <div class="nft-swap">
            <h1 class="right">
              NFT
              <br /> SWAP
            </h1>
            <h1 class="left">
              Made
              <br /> Easy
            </h1>
          </div>
          <div class="start">
            <img src= {vector31} alt="" />
            <p>
              Utilize our digital platform to quickly and easily swap your NFTs
              without the use of a central third party.
            </p>
            <p>
              Step into a world of digitalization, transparency and
              immutability.
            </p>
            <Link to="/dashboard">
              <button class="popup-btn">Get Started</button>
            </Link>
          </div>
        </main>
        <section>
          <div class="section-1">
            <img src= {frame2} alt="background" class="frame-2" />
            <div class="choose-us">
              <h2>why choose us?</h2>
              <p>
                Plasma swap is a decentralized platform that allows for NFT
                transactions
              </p>
              <br />
              <p>
                {" "}
                Take control of your NFTs and enjoy worry-free, secure
                exchanges. Explore various NFTs, offer an exchange, and meet a
                community of like-minded people.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div class="section-2">
            <div class="center">
              <h3>Explore NFTs Available for Swap</h3>
              <p>The best site to swap your NFTs</p>
              <img src= {filter} alt="" />
            </div>

            <div class="cards">
              <div class="users">
                <img src= {splitopen} alt="splitopen img" />
                <h5>Splitopen</h5>
                <p>
                  {" "}
                  You are in your head, you want everyone to see how you feel,
                  your thoughts towards things.
                </p>
                <div class="creator" id="creator1">
                  <img src= {ellipse} alt="ellipse nft" />
                  <div class="dunne">
                    <h5>@Dune</h5>
                    <p>creator</p>
                  </div>
                  <span>22hrs:15min:25sec</span>
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
                  <img src= {ellipse} alt="ellipse nft" />
                  <div class="dunne">
                    <h5>@Maggie</h5>
                    <p>creator</p>
                  </div>
                  <span>20hrs:15min:25sec</span>
                </div>
                <button class="users-button">Make a Swap</button>
              </div>

              <div class="users">
                <img src= {spaceimpact} alt="" />
                <h5>Spaceimpact</h5>
                <p>
                  The universe is wide, encounter space within the metaverse.
                  Take a deep dive into what exists in the alternate universe.
                </p>
                <div class="creator">
                  <img src= {ellipse} alt="ellipse nft" />
                  <div class="dunne">
                    <h5>@Lois</h5>
                    <p>creator</p>
                  </div>
                  <span>21hrs:15min:20sec</span>
                </div>
                <button class="users-button">Make a Swap</button>
              </div>

              <div class="users">
                <img src= {cyber} alt="cyber img" />
                <h5>Cyberfunk</h5>
                <p>
                  Open your mind to the future, see what the sounds produced
                  does to you. Learn your taste and adapt to the pace.
                </p>
                <div class="creator">
                  <img src= {ellipse} alt="ellipse nft" />
                  <div class="dunne">
                    <h5>@Sandman</h5>
                    <p>creator</p>
                  </div>
                  <span>48hrs:15min:25sec</span>
                </div>
                <button class="users-button">Make a Swap</button>
              </div>

              <div class="users">
                <img src= {detached} alt="nft" />
                <h5>Detached</h5>
                <p>
                  Making every stride a lovely one while defending oneself. When
                  you perceive a threat, you apply master Shifu’s teachings.
                </p>
                <div class="creator">
                  <img src= {ellipse} alt="ellipse face" />
                  <div class="dunne">
                    <h5>@Morty</h5>
                    <p>creator</p>
                  </div>
                  <span>20hrs:15min:25sec</span>
                </div>
                <button class="users-button">Make a Swap</button>
              </div>

              <div class="users">
              <img src= {spacecraft} alt="nft" />
                <h5>Spacecraft</h5>
                <p>
                  You are in your head, you want everyone to see how you feel,
                  your thoughts towards things.
                </p>
                <div class="creator" id="creator6">
                  <img src= {ellipse} alt="ellipse face" />
                  <div class="dunne">
                    <h5>@Rick</h5>
                    <p>creator</p>
                  </div>
                  <span>22hrs:15min:25sec</span>
                </div>
                <button class="users-button">Make a Swap</button>
              </div>

              <div class="users">
                <img src= {sipping} alt="nft" />
                <h5>Sipping</h5>
                <p>
                  {" "}
                  The universe is wide, encounter space within the metaverse.
                  Take a deep dive into what exists in the alternate universe.
                </p>
                <div class="creator">
                  <img src= {ellipse} alt="ellipse face" />
                  <div class="dunne">
                    <h5>@Mage</h5>
                    <p>creator</p>
                  </div>
                  <span>21hrs:15min:20sec</span>
                </div>
                <button class="users-button">Make a Swap</button>
              </div>

              <div class="users">
                <img src= {astronaut} alt="nft" />
                <h5>Astronaut</h5>
                <p>
                  {" "}
                  You are in your head, you want everyone to see how you feel,
                  your thoughts towards things.
                </p>
                <div class="creator" id="creator8">
                  <img src= {ellipse} alt="ellipse face" />
                  <div class="dunne">
                    <h5>@Bigfoot</h5>
                    <p>creator</p>
                  </div>
                  <span>48hrs:15min:25sec</span>
                </div>
                <button class="users-button">Make a Swap</button>
              </div>
            </div>
            <div class="pages">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
              <span>
                <a href="Nfts.htmls"> Page1</a>
                <span>2</span> <span>3</span> <span>4</span>{" "}
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </section>
        <section>
          <div class="section-3" id="three">
            <div class="frame-2">
              <img
                src= {frame3}
                alt="background"
                class="frame-2"
              />
            </div>
            <div class="choose-us">
              <h2>How it works</h2>
              <p>
                Join the Plasma platform to experience the best services and
                follow top users.
              </p>
              <ol class="sec3-lists">
                <li>Set up your wallet</li>
                <li>Explore site to see notable NFTs</li>
                <li>Select "make a swap"</li>
                <li>Select NFT you will like to swap with</li>
                <li>Wait for approval from the user you wish to swap with</li>
                <li>On confirmation, NFT will be swapped</li>
              </ol>
            </div>
          </div>
        </section>
        <section>
          <div class="section-4">
            <div class="center">
              <h3>Swap Testimonials</h3>
              <p>Get an idea of what goes down in the swap universe</p>
              <img src= {filter} alt="nft" />
            </div>

            <div class="appraisal">
              <div class="testify">
                <div class="testimonials">
                  <img src= {ghostrider} alt="nft" />
                  <div class="profile">
                    <h3>Ghostrider</h3>
                    <p>
                      You are in your head, you want everyone to see how you
                      feel, your thoughts towards things.
                    </p>
                    <div class="fix">
                      <img src= {ellipse} alt="ellipse" />
                      <div class="dunne">
                        <h5>@Maggie</h5>
                        <p>creator</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="network">
                  <img src= {fill} alt="icon" />
                  <p>0xag5...pls |</p>
                  <img src= {ETH} alt="icon" />
                  <p>0.00 ETH |</p>
                  <p>Total NFTs = 1 |</p>
                  <img src= {carbon} alt="clock icon" />
                  <p>20hrs : 15min : 25sec</p>
                </div>
              </div>

              <div class="swap-logo">
                <img src= {logo} alt="logo" />
              </div>

              <div class="testify">
                <div class="testimonials">
                  <img src= {lois} alt="lois" />
                  <div class="profile">
                    <h3>Ghostrider</h3>
                    <p>
                      You are in your head, you want everyone to see how you
                      feel, your thoughts towards things.
                    </p>
                    <div class="fix">
                      <img src= {ellipse} alt="ellipse" />
                      <div class="dunne">
                        <h5>@Lois</h5>
                        <p>creator</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="network">
                  <img src= {fill} alt="icon" />
                  <p>0xag7...swp |</p>
                  <img src= {ETH} alt="icon" />
                  <p>0.00 ETH |</p>
                  <p>Total NFTs = 1 |</p>
                  <img src= {carbon} alt="clock icon" />
                  <p>20hrs : 15min : 25sec</p>
                </div>
              </div>
            </div>

            <div class="swap-board">
              <div class="block">
                <p>Swap Date:</p>
                <b>Tue Nov 15, 2022.</b>{" "}
              </div>
              <div class="block" id="blocks">
                <p>Txn Hash: </p>
                <b>
                  0x2a77ac1b96215aa2gee4506110291454b4dgh4789cdfb701tg89i05745tr75ui
                </b>
                <b class="query">0x2a777ac....</b>
              </div>
            </div>

            <div class="appraisal" id="appraisal2">
              <div class="testify">
                <div class="testimonials">
                  <img src= {simpson} alt="simpson img" />
                  <div class="profile">
                    <h3>Simpson</h3>
                    <p>
                      You are in your head, you want everyone to see how you
                      feel, your thoughts towards things.
                    </p>
                    <div class="fix">
                      <img src= {ellipse} alt="ellipse" />
                      <div class="dunne">
                        <h5>@Sandman</h5>
                        <p>creator</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="network">
                  <img src= {fill} alt="icon" />
                  <p>0xag5...pls |</p>
                  <img src= {ETH} alt="icon" />
                  <p>0.00 ETH |</p>
                  <p>Total NFTs = 1 |</p>
                  <img src= {carbon} alt="clock icon" />
                  <p>20hrs : 15min : 25sec</p>
                </div>
              </div>

              <div class="swap-logo">
                <img src= {logo} alt="logo" />
              </div>

              <div class="testify">
                <div class="testimonials">
                  <img src= {groot} alt="groot" />
                  <div class="profile">
                    <h3>Groot</h3>
                    <p>
                      You are in your head, you want everyone to see how you
                      feel, your thoughts towards things.
                    </p>
                    <div class="fix">
                      <img src= {ellipse} alt="ellipse" />
                      <div class="dunne">
                        <h5>@Dune</h5>
                        <p>creator</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="network">
                  <img src= {fill} alt="icon" />
                  <p>0xag7...swp |</p>
                  <img src= {ETH} alt="icon" />
                  <p>0.00 ETH |</p>
                  <p>Total NFTs = 1 |</p>
                  <img src= {carbon} alt="clock icon" />
                  <p>20hrs : 15min : 25sec</p>
                </div>
              </div>
            </div>

            <div class="swap-board">
              <div class="block">
                <p>Swap Date:</p>
                <b>Tue Nov 15, 2022.</b>{" "}
              </div>
              <div class="block" id="blocks">
                <p>Txn Hash: </p>
                <b>
                  0x2a77ac1b96215aa2gee4506110291454b4dgh4789cdfb701tg89i05745tr75ui
                </b>
                <b class="query">0x2a771c....</b>
              </div>
            </div>

            <div class="pages" id="pages2">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
              <span>
                <a href="Nfts.html"> Page1</a>
                <span>2</span> <span>3</span> <span>4</span>{" "}
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
