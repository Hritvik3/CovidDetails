const URL = "https://covid19.mathdro.id/api"

let app = angular.module("MyApp", []);

app.controller("MyCtrl", ($scope, $http) => {
    $scope.title = "Stay Home Stay Safe";
    console.log("App loaded");

    // calling the api
    $http.get(URL).then((response)=>{
        // success
        $scope.all_data = response.data;
        console.log(response.data);
        

    }, (error)=>{
        // error
        console.log(error);
    });


    // get country data

    $scope.get_c_data= () =>{
       let country = $scope.c;
       if(country == ""){
           $scope.c_data = undefined;
           return;
       }

       $http.get(`${URL}/countries/${country}`).then(
           (response)=>{
            // success
            console.log(response.data);
            $scope.c_data = response.data;
           },
           (error) =>{
            console.log(error);
           }
       )
    }

})