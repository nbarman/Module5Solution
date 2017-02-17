(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['personalInfo'];
function MyInfoController(personalInfo) {
      var myInfoCtrl = this;
      myInfoCtrl.personalInfo = personalInfo;
      var isEmpty = $.isEmptyObject(myInfoCtrl.personalInfo);
      if(isEmpty){
          hideResults();
      } else {
          showResults();
      }
}

function showResults(){
    $(' .userInfo').show();
    $('.redirect').hide();
}

function hideResults(){
    $(' .userInfo').hide();
    $('.redirect').show();
}
})();
