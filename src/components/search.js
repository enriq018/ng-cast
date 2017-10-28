angular.module('video-player')

  .component('search', {
    // TODO
    templateUrl: 'src/templates/search.html',
    
    bindings: {
      search: '<',
      text: '<'
    },
    controller: function() {
      this.result = (someInput) => {
        //this.youTube.saerch(someInput);
        this.someInput = '';
      },
      this.text = '';
    }
  });
