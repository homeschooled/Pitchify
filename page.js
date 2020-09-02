console.log("Pitchify loaded!");
// var ytSpeed;void 0===ytSpeed&&(ytSpeed={playbackRate:1,preservesPitch:!1,init:function(){new MutationObserver(function(a){ytSpeed.updateVideos()}).observe(document.querySelector("body"),{attributes:!0,childList:!0,characterData:!0,subtree:!0}),ytSpeed.updateVideos()},updateVideos:function(){for(var a=document.getElementsByTagName("video"),b=0;b<a.length;++b){var c=a[b];c.playbackRate=this.playbackRate,c.mozPreservesPitch=this.preservesPitch&&1!=this.playbackRate}},speedUp:function(){this.playbackRate*=1.05946309436,ytSpeed.updateVideos()},speedDown:function(){this.playbackRate/=1.05946309436,ytSpeed.updateVideos()},reset:function(){this.playbackRate=1,ytSpeed.updateVideos()},prompt:function(){var a=prompt("New playback speed:",this.playbackRate);a&&(this.playbackRate=a,ytSpeed.updateVideos())}},ytSpeed.init()); 

ytSpeed.prompt();


// document.querySelector('button').addEventListener('click', () =>{
// 	console.log('u pressed me tbh.')
// })


