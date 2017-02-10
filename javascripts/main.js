"use strict";

let earth = require("./earth.js"),
	jupiter = require("./jupiter.js"),
	mars = require("./mars.js"),
	mercury = require("./mercury.js"),
	neptune = require("./neptune.js"),
	saturn = require("./saturn.js"),
	uranus = require("./uranus.js"),
	venus = require("./venus.js"),
	planets = [],
	row1 = $("#row1"),
	row2 = $("#row2"),
	row3 = $("#row3"),
	row4 = $("#row4");

$.ajax({
        url: '../planets.json'
    }).done(function(planetData){
    	planets = planetData.planets;
        mercury.outputTo(row1, planets[0]);
    }).then(function(planetData){
        venus.outputTo(row1, planets[1]);
    }).then(function(planetData){
        earth.outputTo(row2, planets[2]);
    }).then(function(planetData){
        mars.outputTo(row2, planets[3]);
    }).then(function(planetData){
        jupiter.outputTo(row3, planets[4]);
    }).then(function(planetData){
        saturn.outputTo(row3, planets[5]);
    }).then(function(planetData){
        uranus.outputTo(row4, planets[6]);
    }).then(function(planetData){
        neptune.outputTo(row4, planets[7]);
});


