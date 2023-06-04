// Überprüfen der Schriftkultur des Besuchers
if (window.getComputedStyle(document.body).direction === "rtl") {
    var menuContainer = document.getElementById("sidebar");
    menuContainer.style.textAlign = "left"; // Linksorientierte Ausrichtung für rechtsbasierte Schriftkulturen
  }
  