(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignUpService'];
function SignupController(SignUpService) {
  var signUpCtrl = this;

        signUpCtrl.submit = function () {
            var fname = signUpCtrl.user.firstName;
            var lname = signUpCtrl.user.lastName;
            var email = signUpCtrl.user.email;
            var phone = signUpCtrl.user.phone;
            var fmenuitem = signUpCtrl.user.favMenuNo;

            var promise = SignUpService.getMenuItem(fmenuitem);

            promise.then(function(items){

                    signUpCtrl.itemsNotFound = false;

                  if(items === 500){
                    //  console.log("here");
                    signUpCtrl.itemsNotFound = true;
                  } else{
                          signUpCtrl.found = items;
                          
                        }
                //  console.log(  signUpCtrl.found.description);
              });

            };

      }// End of Submit fn


})();
