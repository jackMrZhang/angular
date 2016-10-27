angular.module("bj.service",[])
    .service("searchservice",function($http,$q){
        var url = "http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText=%E8%A1%A3&callback=JSON_CALLBACK";
        this.getList = function(kw)
        {
            var defered = $q.defer();
            $http({
                url:url,
                method:"JSONP"
            }).success(function(data){
                defered.resolve(data);
            }).error(function(data){
                defered.reject(data);
            })
            return defered.promise
        }
    })
