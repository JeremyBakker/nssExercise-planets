"use strict";

let planetForm = require("./planetForm.js");

let outputTo = (domReference, data) => {
  return new Promise((resolve, reject) => {
  	let verbiage = planetForm.fill(data);
  	domReference.append(verbiage);
  	resolve();
  });
};

module.exports = {outputTo};