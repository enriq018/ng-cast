angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      onClick: '<'
    },
    
    controller: function () {
      this.video; //will hold a video object with url title and description
    }
  });
