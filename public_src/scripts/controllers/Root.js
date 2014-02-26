app.controller('Root', function($scope){
    $scope.$on('updateTitle', function(e, title){
        $scope.title = title;
    });
});