import React from "react";
import { ethers } from "ethers";
import Logo2 from "../images/logo 2.png";

function Header() {
  const connectWallet = () => {
    console.log("fired");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    //request for your request
    provider.send("eth_requestAccounts", []);
  };


  return (
    <header>
      <nav class="nav-bar">
        <div class="logo">
          <img src={Logo2} alt="logo" class="logo-image" />
        </div>

        <div class="nav-menu">
          <ul class="nav-list">
            <li class="nav-item1">
              <a href="#three">How it works</a>
            </li>
            <li class="nav-item2">
              <button onClick={connectWallet}>Connect Wallet</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
