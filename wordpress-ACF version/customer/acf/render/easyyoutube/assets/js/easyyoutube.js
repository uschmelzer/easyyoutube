// https://stackoverflow.com/a/9899701
// Plain JS domReady
( function() {

  //console.log('easyyoutube: DOMREADY');

  // ———————————————————————————————————————————————————————————————————
  // GET DOM ELEMENTS
  // ———————————————————————————————————————————————————————————————————
  // .easyyoutubePlayVideoButton
  // ———————————————————————————————————————————————————————————————————
  // E.g. the play buttons of some Videos
  // ———————————————————————————————————————————————————————————————————
  var easyyoutubePlayVideoButtons = document.getElementsByClassName("easyyoutubePlayVideoButton")

  //console.log('easyyoutube: Found '+ easyyoutubePlayVideoButtons.length +' videos on this page.');

  // ———————————————————————————————————————————————————————————————————
  // ADD EVENTHANDLER
  // ———————————————————————————————————————————————————————————————————
  var i;
  for (i = 0; i < easyyoutubePlayVideoButtons.length; i++) {
      // Browsercompatability for addEventListener: IE9+ and all modern browsers
      easyyoutubePlayVideoButtons[i].addEventListener("click", easyyoutubePlayVideo);
      //console.log('Add Eventhandler for button '+i, easyyoutubePlayVideoButtons[i]);
  }

})();
// eo Plain JS domReady


function easyjsHasClass(element, cls) {
  // https://www.tutorialspoint.com/How-to-test-if-an-element-contains-class-in-JavaScript-in-HTML
  // https://gist.github.com/robhadfield/e15bcad039be370127233e3dc94e7aaf
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


function easyyoutubePlayVideo() {

  // https://molily.de/js/event-handling-objekt.html
  //console.log("Element vom Typ " + this.nodeName + " wurde geklickt!");


  // ———————————————————————————————————————————————————————————————————
  // GET DOM ELEMENT (1)
  // ———————————————————————————————————————————————————————————————————
  // Get div.easyyoutubeOverlay
  // ———————————————————————————————————————————————————————————————————
  // console.log("1", this.parentElement.nodeName );
  // console.log("1", this.parentElement.className );
  //
  // console.log("2", this.parentElement.parentElement.nodeName);
  // console.log("2", this.parentElement.parentElement.className);
  //
  // console.log("3", this.parentElement.parentElement.parentElement.nodeName);
  // console.log("3", this.parentElement.parentElement.parentElement.className);
  //
  // console.log("4", this.parentElement.parentElement.parentElement.parentElement.nodeName);
  // console.log("4", this.parentElement.parentElement.parentElement.parentElement.className);
  //
  // console.log("5", this.parentElement.parentElement.parentElement.parentElement.parentElement.nodeName);
  // console.log("5", this.parentElement.parentElement.parentElement.parentElement.parentElement.className);
  //
  // console.log("6", this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nodeName);
  // console.log("6", this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className);
  // ———————————————————————————————————————————————————————————————————
  var easyyoutubeOverlay = this.parentElement.parentElement.parentElement.parentElement.parentElement;

  // ———————————————————————————————————————————————————————————————————
  // HINT: use easyjsHasClass(), because .easyyoutubeOverlay has
  //       multiple classes set.
  // ———————————————————————————————————————————————————————————————————
  if (easyjsHasClass(easyyoutubeOverlay, 'easyyoutubeOverlay')) {
    // All good
    //console.log ('SUCCESS: OVERLAY found');

  } else {
    // Error
    console.log ('ERROR: easyyoutubeOverlay not found');
    console.log ('DEBUG: easyyoutubeOverlay.className = '+ easyyoutubeOverlay.className);
    return;
  }

  // ———————————————————————————————————————————————————————————————————
  // GET DOM ELEMENT (2)
  // ———————————————————————————————————————————————————————————————————
  // Get div.easyyoutubeIframeContainer
  // ———————————————————————————————————————————————————————————————————
  // This div contains the iframe we want to work with
  // ———————————————————————————————————————————————————————————————————
  // console.log("1", easyyoutubeOverlay.parentElement.nodeName );
  // console.log("1", easyyoutubeOverlay.parentElement.className );
  //
  // console.log("2", easyyoutubeOverlay.parentElement.parentElement.nodeName );
  // console.log("2", easyyoutubeOverlay.parentElement.parentElement.className );
  // ———————————————————————————————————————————————————————————————————
  var easyyoutubeIframeContainer = easyyoutubeOverlay.parentElement;

  // ———————————————————————————————————————————————————————————————————
  // HINT: use easyjsHasClass(), because .easyyoutubeIframeContainer
  //       has multiple classes set.
  // ———————————————————————————————————————————————————————————————————
  if (easyjsHasClass(easyyoutubeIframeContainer, 'easyyoutubeIframeContainer')) {
    // All good
    //console.log ('SUCCESS: iFrameContainer found');

  } else {
    // Error
    console.log ('ERROR: easyyoutubeIframeContainer not found');
    console.log ('DEBUG: easyyoutubeIframeContainer.className = '+ easyyoutubeIframeContainer.className);
    return;
  }

  // ———————————————————————————————————————————————————————————————————
  // GET DOM ELEMENT (3)
  // ———————————————————————————————————————————————————————————————————
  // Get div.easyyoutubeIframeContainer
  // ———————————————————————————————————————————————————————————————————
  // This div contains the iframe we want to work with
  // ———————————————————————————————————————————————————————————————————
  // console.log("1", easyyoutubeOverlay.parentElement.nodeName );
  // console.log("1", easyyoutubeOverlay.parentElement.className );
  //
  // console.log("2", easyyoutubeOverlay.parentElement.parentElement.nodeName );
  // console.log("2", easyyoutubeOverlay.parentElement.parentElement.className );
  // ———————————————————————————————————————————————————————————————————
  var allFoundIframes = easyyoutubeIframeContainer.getElementsByTagName('iframe');
  //console.log ('SUCCESS: Found '+ allFoundIframes.length +' iFrame(s) found', allFoundIframes);

  if (allFoundIframes.length) {
    // All good
    // Use the first one
    var easyyoutubeIframe = allFoundIframes[0]; // Get first
    //console.log ('SUCCESS: iFrame found', easyyoutubeIframe);

  } else {
    // Error
    console.log ('ERROR: iFrame not found');
    return;
  }




  // ———————————————————————————————————————————————————————————————————
  // DO STH WITH THE DOM ELEMENTS
  // ———————————————————————————————————————————————————————————————————
  // Hide overlay (has poster image in bg)
  // ———————————————————————————————————————————————————————————————————
  easyyoutubeOverlay.style.display = "none";



  // ———————————————————————————————————————————————————————————————————
  // DO STH WITH THE DOM ELEMENTS
  // ———————————————————————————————————————————————————————————————————
  // Set src for video in iframe
  // ———————————————————————————————————————————————————————————————————
  // Add Autoplay:
  // https://stackoverflow.com/a/27980893
  // ———————————————————————————————————————————————————————————————————
  //console.log('Get iFrame data-src:', easyyoutubeIframe.dataset.src);
  //console.log('Set iFrame src to:', easyyoutubeIframe.dataset.src);
  easyyoutubeIframe.src = easyyoutubeIframe.dataset.src +'?autoplay=1';

  // ———————————————————————————————————————————————————————————————————
  // Show iframe
  // ———————————————————————————————————————————————————————————————————
  //console.log('Show iFrame/play video');
  easyyoutubeIframe.style.display = 'block';

}
