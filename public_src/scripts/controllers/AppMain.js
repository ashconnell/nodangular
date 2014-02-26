app.controller('AppMain', function($rootScope, $scope){
    console.log('loaded App.Main controller');
    $rootScope.$broadcast('updateTitle', 'lol');
});