/*  JavaScript 6th Edition
    Chapter 11
    Chapter case

    Whole Spectrum Energy Solutions
    Author: Matthew Tanner
    Date: 11/25/2018

    Filename: script.js
*/

"use strict";

// global variables
var selectedCity = "Tucson, AZ";
var weatherReport;
var httpRequest = false;

function getRequestObject() {
  try {
    httpRequest = new XMLHttpRequest();
  }
  catch (requestError) {
    document.querySelector('p.error').innerHTML = 'Forcast not supported by your browser.';
    document.querySelector('p.error').style.display = 'block';
    return false;
  }
  return httpRequest;
}

function getWeather(evt) {
   var latitude;
   var longitude;
   if (evt.type !== "load") {
      if (evt.target) {
         selectedCity = evt.target.innerHTML;
      } else if (evt.srcElement) {
         selectedCity = evt.srcElement.innerHTML;
      }
   }
   if (selectedCity === "Tucson, AZ") {
      latitude = 37.7577;
      longitude = -122.4376;
   } else if (selectedCity === "Chicago, IL") {
      latitude = 41.8337329;
      longitude = -87.7321555;
   } else if (selectedCity === "Montreal, QC") {
      latitude = 45.5601062;
      longitude = -73.7120832;
   }

   if (!httpRequest) {
     httpRequest = getRequestObject();

     httpRequest.abort();
     httpRequest.open('get','solar.php?' + 'lat=' + latitude + '&lng=' + longitude, true);
     httpRequest.send(null);
   }
   httpRequest.onreadystatechange = fillWeather;
}

function fillWeather() {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    weatherReport = JSON.parse(httpRequest.responseText);
  }
}

var locations = document.querySelectorAll("section ul li");
for (var i = 0; i < locations.length; i++) {
   if (locations[i].addEventListener) {
      locations[i].addEventListener("click", getWeather, false);
   } else if (locations[i].attachEvent) {
      locations[i].attachEvent("onclick", getWeather);
   }
}
if (window.addEventListener) {
   window.addEventListener("load", getWeather, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", getWeather);
}
