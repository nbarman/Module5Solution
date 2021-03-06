(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignUpService','MyApiBasePath'];
function SignupController(SignUpService,MyApiBasePath) {
  var signUpCtrl = this;

        signUpCtrl.submit = function () {

           var favMenuItem = signUpCtrl.user.favMenuNo;
            var promise = SignUpService.getMenuItem(favMenuItem);

            promise.then(function(items){

                    signUpCtrl.itemsNotFound = false;
                    signUpCtrl.submitSuccess = false;

                  if(items === 500){
                    //  console.log("here");
                    signUpCtrl.itemsNotFound = true;
                  } else{
                          var imgPath = MyApiBasePath+'/images/'+favMenuItem+'.jpg';
                          console.log("URL", imgPath);
                          signUpCtrl.found = items;
                          var personalInfo ={
                            fname : signUpCtrl.user.firstName,
                            lname : signUpCtrl.user.lastName,
                            email : signUpCtrl.user.email,
                            phone : signUpCtrl.user.phone,
                            fmenuitem : favMenuItem,
                            itemDescription : signUpCtrl.found.description,
                            title: signUpCtrl.found.name,
                            itemImage: imgPath
                          }
                          console.log("Personal info",personalInfo);
                          SignUpService.setPersonalInfo(personalInfo);
                          signUpCtrl.submitSuccess = true;
                          clearFields();

                        }
                //  console.log(  signUpCtrl.found.description);
              });

            };// End of Submit fn

      }

      // Clears all the input fields
      function clearFields(){

        $('.formElement input').each(function () {
          $(this).val("");
        });
      }


})();
