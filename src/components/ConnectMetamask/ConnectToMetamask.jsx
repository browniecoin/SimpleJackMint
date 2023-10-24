import React, { useEffect, useState, useRef } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

import axios from 'axios';
import * as d3 from 'd3';

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');



  return (
    <div className="container" >
      <div className="jumbotron custom-jumbotron">
        <h1 className="display-5 text-center">
          Simple Jack
        </h1>
        <h3 className="display-5 p-4 text-center">
          You Muh-Muh-Make Me Happy
        </h3>

        <img src="images/simplejack.gif" width="100%" />


                    <p className="p-4">

                    <a href="https://x.com/SimpleJackCoin" ><i class="fab fa-twitter large-icon"></i></a>
                    &nbsp;&nbsp;
                    <a href="https://t.me/SimpleJackCoin" ><i class="fab fa-telegram large-icon"></i></a>

                    <hr className="my-4" />
                    <button
                      onClick={connectToMetamask}
                      className="btn btn-primary d-flex align-items-center"
                      style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                    >
                      Connect Wallet
                    </button>
                    </p>

                <hr className="my-4" />
                BlackJack Token CA 0xd9145CCE52D386f254917e481eB44e9943F39138
                <hr className="my-4" />
                Dextools: <a href="" >Chart</a>
                <p>
                Introducing the "Blackjack Token" – a game token designed for specific games like blackjack and others we may create. This token is named after your favorite game, blackjack, to capture its essence of strategy and excitement. With the Blackjack Token in hand, you'll experience the thrill of every move you make in your gaming adventures.
                </p>
                <hr className="my-4" />
                SimpleJack Token CA: 0x7D3687F3C998d46e55690750d6438768D163c95A
                <hr className="my-4" />
                Dextools: <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x8d69680e63619562d860048276cbf301710ff0a7" >Chart</a>
                <p>
                <hr className="my-4" />
                This token is primarily designed for use as a fun play gaming token, adding an extra layer of excitement and enjoyment to your gaming experience.
                </p>
                <hr className="my-4" />
                Simple Jack NFT CA: 0x656230E3076325a4EdeE615becc7FD66bFfAd4bf

        <hr className="my-2" />
        SimpleJack.vip &copy; 2023 All rights reserved.
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
