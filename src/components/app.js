angular.module('video-player')
 
  
  
  .component('app', {
    // TODO
    templateUrl: 'src/templates/app.html',
    
    
    bindings: {
      
    },
    controller: function() {
      this.currentVideo = window.exampleVideoData[1],
      this.videos = window.exampleVideoData,
      //console.log(window.exampleVideoData.video.snippet.thumbnails.default.url)
      this.selectVideo = video => { this.currentVideo = video; },
      this.searchResults = data => {};
    }
  });
