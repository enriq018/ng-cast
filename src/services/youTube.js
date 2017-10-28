angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (cb) => {
      $http({method: 'GET', url: 'https://www.googleapis.com/youtube/v3/search', 
        params: {
          q: 'saturday',
          key: window.YOUTUBE_API_KEY,
          maxResults: '5',
          part: 'snippet', 
          type: 'video',
          videoEmbeddable: 'true'
        }})
        .then(function callback(response) {
          console.log('success: ', response);
          cb(response);
        }, function errorCallback(response) {
          console.log('FAILED: ', response);
        });
    };
    
  });
