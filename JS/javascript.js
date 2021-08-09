


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '360',
     width: '640',
     videoId: 'YcaLUPGh0wg',
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }

 function onPlayerReady(event) {
   event.target.playVideo();
 }


 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(playVideo, 3000); 
     done = true; ;
   }
 }
 function playVideo() {
   player.playVideo(); var intro = document.getElementById('intro');
   intro.style.color = '#FF00FF';
 };

  
 //
  

 function onPlayerReady(event) {
    event.target.playVideo();
  }
 
var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(playVideo, 6000); 
     done = true; ;
   }
 }
 function playVideo() {
   player.playVideo(); var introd = document.getElementById('introd');
   introd.style.color = '#FF8000';
 } 

 //
 function onPlayerReady(event) {
    event.target.playVideo();
  }
 
var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(playVideo, 8000); 
     done = true; ;
   }
 }
 function playVideo() {
   player.playVideo(); var introdu = document.getElementById('introdu');
   introdu.style.color = '#FF7000';
 }  