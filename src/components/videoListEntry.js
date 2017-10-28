angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    templateUrl: 'src/templates/videoListEntry.html',
    bindings: {
      onClick: '<',
      video: '<'
    },
    
    // controller: function () {
    //   console.log(this)
    // }
  });
