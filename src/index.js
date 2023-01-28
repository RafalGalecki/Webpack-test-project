"use strict";

// npm run build-dev - for the project developing
// npm run build-prod - only for production (for clients) [comment watch:true in webpack.config]
// server on localhost:9000 - npx webpack serve --> npm run dev [uncomment...]

import _ from "lodash";
import { displayMouseCoords } from "./coordsDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";

const formElement = document.querySelector(".container form");

document.addEventListener(
  "mousemove",
  _.throttle((event) => {
    displayMouseCoords({
      x: event.x,
      y: event.y
    });
  }, 333)
);
