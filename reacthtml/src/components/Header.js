import React from "react";

class Header extends React.Component{
    render () {
        return (
            <header>
            <nav>
                <div class="nav-bar">
                    <div class="logo">
                        <img src="./images/logo 2.png" alt="logo" class="logo-image" />
                    </div>
    
                    <div class="nav-menu">
                        <ul class="nav-list">
                            <li class="nav-item1"><a href="#three">How it works</a></li>
                            <li class="nav-item2"><button>Connect Wallet</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        )
    }
}

export default Header;