import React from "react";

class Popup extends React.Component {
    render() {
        return(
            <div class="popup">
    <button class="close-btn">&times;</button>
    <img src="./images/logo 2.png" alt="plasma logo" class="popup-logo" />
    <div class="connect">
        <h3>Connect your wallet</h3>
        <p>Select your most preferred wallet to continue</p>
        <div class="connect-logo">
        <button class="connect-button" onclick="connect()"><img src="./images/metamask.png" alt="metamask logo"/></button>
        <button class="connect-button" onclick="connect()"><img src="./images/coinbase.png" alt="coinbase logo"/></button>
        </div>
    </div>
</div>
        )
    }
}

export default Popup;