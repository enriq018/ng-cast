angular.module('video-player')
 
  
  
  .component('app', {
    templateUrl: 'src/templates/app.html',
   
    controller: function(youTube) {
      this.currentVideo = window.exampleVideoData[1],
      this.videos = window.exampleVideoData,
      this.selectVideo = (video) => { this.currentVideo = video; },
      this.searchResults = (text) => {
        youTube.search(text, data => {
          this.videos = data.data.items;
          this.currentVideo = data.data.items[0];
        });
      },
      this.searchResults('keyboard cat');
    }
  });

//clear search after being entered or rendered
// keycode 13 ---> keypress ng
//double check learn to see
