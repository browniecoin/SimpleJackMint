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


                    <p className="p-2">

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
                CA:
                <hr className="my-4" />
                Dextools:

        <hr className="my-2" />
        SimpleJack.vip &copy; 2023 All rights reserved.
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;