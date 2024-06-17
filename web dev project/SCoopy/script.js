// Coming soon setIntervel
function time(){
  
  const futureDate = new Date('2024-06-18T00:00:00');
  const timeDiff = futureDate - Date.now();

  // The padStart() method pads a string with another string (multiple times) until it reaches a given length.
  const hours = String(Math.floor(timeDiff / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((timeDiff % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((timeDiff % 60000) / 1000)).padStart(2, '0');

  document.getElementById("hrs").innerText=hours;
  document.getElementById("mins").innerText=minutes;
  document.getElementById("sec").innerText=seconds;

  }
setInterval(time,1000);
  
// closeAds
function closeAd() {
    document.querySelector(".ads-position").style.display = "none";
  }

//diplay Ad
function ad(){
  setTimeout(() => {
    document.querySelector(".ads-position").style.display = "block";
  }, 6000);
}


// BOM PART 
//-------Screen------
//The window.screen object can be written without the window prefix.
function size() {
  document.getElementById("ice1").innerHTML = screen.width +  " x " + screen.height ;
}
// screen.width - returns the width of the visitor's screen in pixels.
// screen.height - returns the height of the visitor's screen in pixels.
// screen.availWidth - returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
// screen.availHeight - returns the height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
// screen.colorDepth - returns the number of bits used to display one color.
// screen.pixelDepth - returns the pixel depth of the screen.

//--------Location------
// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

function host() {
  document.getElementById("ice2").innerHTML =  window.location.protocol;
}
// window.location.href - returns the href (URL) of the current page
// window.location.hostname - returns the domain name of the web host
// window.location.pathname -  returns the path and filename of the current page
// window.location.protocol - returns the web protocol used (http: or https:)
// window.location.assign(naturalicecreams.in) - loads a new document 


// ------- History -------
// The window.history object contains the browsers history.

function goBack() {
  document.getElementById("ice2").innerHTML =  window.history.back();
}
// window.history.back() -  loads the previous URL in the history list.


function goforward() {
  document.getElementById("ice2").innerHTML =  window.history.forward();
}
//  window.history.forward() - loads the next URL in the history list.




 // Extra Part OF BOM 
//--- Window -------
// window.innerWidth - inside width of window
// window.innerHeight - inside Height of window
// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window