(function () {
'use strict';


angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/myinfo/personalInfo.html',
  bindings: {
    items: '<',
  }
});

})();
