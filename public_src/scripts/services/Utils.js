app.service('Utils', function($rootScope){
    this.updateTitle = function(title){
        $rootScope.$broadcast('updateTitle', title);
    }
});