angular.module('video-player')

  .component('search', {
    // TODO
    templateUrl: 'src/templates/search.html',
    
    bindings: {
      search: '<'
    },
    controller: function() {
      this.result = (result) => {
      };
      
    }
  });
