//     function onLoadHandler() {
// let stateCheck = setInterval(() => {
//   if (document.readyState === 'complete') {
//     clearInterval(stateCheck);
//     // document ready
//     console.log('dom ready');
//       console.log('iframe loaded');
//       var ifrm = document.getElementById('youtubeVideo').style.width = '400px';
//       // var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
//       // var form = doc.getElementById('player');
//       // var thePlayer = doc.getElementById('player').style.width = '400px';
//   }
// }, 100);
//     }

    // function onLoadHandler() {
    //   console.log('iframe loaded');
    //   var theIframe = document.getElementById('youtubeVideo');
    //   var thePlayer = document.getElementById('#player').style.width = '400px';
    // }
// YouTube Player Manual Embed
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '200',
//     width: '200',
//     videoId: 'xheslNo6U-U',
//     playerVars: {
//          'autoplay': 0,
//          'controls': 0,
//          'modestbranding': 0,
//          'showinfo': 0,
//          'playsinline': 0,
//          'rel' : 0
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   // event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }

// function playVideo() {
//   player.playVideo();
// }

// var tid = setInterval( function () {
//   if ( document.readyState !== 'complete' ) return;
//   clearInterval( tid );
//   // do your work
//   var videoContainer = document.getElementById('video-container');
//   var playVideoButton = document.getElementById('video-play-button');
//   var videoOverlay = document.getElementById('video-overlay');
//   var videoPlayer = document.getElementById('player');

//   playVideoButton.addEventListener("click",function(e){
//     playVideo();
//     // videoOverlay.src = '/images/silver-tv.png';
//     videoContainer.style.width = '100%';
//     videoPlayer.style.width = '100%';
//     videoPlayer.style.height = '80vh';
//     videoOverlay.style.display = 'none';
//     playVideoButton.style.display = 'none';
//     e.preventDefault();
//   }, false);
// }, 100);
