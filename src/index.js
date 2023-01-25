"use strict";

document.addEventListener(
  "mousemove",
  _.throttle((event) => {
    console.log(event.x, event.y);
  }, 250)
);
