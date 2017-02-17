(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService)
.constant('MyApiBasePath', "https://nbarman-angularjs-resturant.herokuapp.com");


      SignUpService.$inject = ['$http', 'MyApiBasePath'];
      function SignUpService($http, MyApiBasePath) {
        var service = this;

              service.getMenuItem = function (short_name) {
                return $http.get(MyApiBasePath + '/menu_items/'+ short_name +'.json')
                .then(function success(response) {
                        return response.data;
                }, function error(response){
                    var status = 500;
                    return status;
                });
              };

      }
})();
