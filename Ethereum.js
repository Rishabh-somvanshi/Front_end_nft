import React from "react";
import "./index.css";
import icon from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import image from "./images/image-avatar.png";

export default function Ethereum() {
  return (
    <div class="div mx-auto">
      <br />
      <br />
      <br />
      <br />

      <div class="card">
        <div class="card-body">
          <img
            class="img card-img-top"
            src="https://nftcardfrontendmentor.netlify.app/images/equilibrium.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
          
            <h5 class="card-title">Equilibrium #3429</h5>
            <br />
            <p class="card-text">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div class="container">
          <div class="row">
                <div class="col-sm">
                  <p class="card-text pull-left">
                    <img class="img" src={icon} alt="Card image cap" />
                    <small class="text-info">0.041 ETH</small>
                  </p>
                </div>
                <div class="col-sm">
                  <p class="card-text pull-right">
                    <img class="img" src={clock} alt="Card image cap" />
                    <small class="text-muted">3 days left</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted bg_color">
            <img class="image" src={image} />
            <small class="text-muted">Creation of </small>
            <small class="text-white">Jules Wyvern</small>
          </div>
        </div>
      </div>
    </div>
  );
} //"https://nftcardfrontendmentor.netlify.app/images/equilibrium.jpg"
