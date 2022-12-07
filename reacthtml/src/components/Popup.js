import React from "react";
import logo2 from "../images/logo 2.png"
import metamask from "../images/metamask.png"
import coinbase from "../images/coinbase.png"


class Popup extends React.Component {
    render() {
        return(
            <div class="popup">
    <button class="close-btn">&times;</button>
    <img src= {logo2} alt="plasma logo" class="popup-logo" />
    <div class="connect">
        <h3>Connect your wallet</h3>
        <p>Select your most preferred wallet to continue</p>
        <div class="connect-logo">
        <button class="connect-button" onclick="connect()"><img src= {metamask} alt="metamask logo"/></button>
        <button class="connect-button" onclick="connect()"><img src= {coinbase} alt="coinbase logo"/></button>
        </div>
    </div>
</div>
        )
    }
}

export default Popup;