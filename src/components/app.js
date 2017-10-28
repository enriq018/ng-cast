angular.module('video-player')
 
  
  
  .component('app', {
    templateUrl: 'src/templates/app.html',
    
    bindings: {
    },
    controller: function(youTube) {
      this.currentVideo = window.exampleVideoData[1],
      this.videos = window.exampleVideoData,
      this.selectVideo = (video) => { this.currentVideo = video; },
      this.searchResults = (data) => {
        youTube.search(data => {
          this.videos = data.data.items;
          this.currentVideo = data.data.items[0];
        });
      };
    }
  });
