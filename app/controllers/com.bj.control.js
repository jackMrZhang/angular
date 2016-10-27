/**
 * Created by Administrator on 2016/10/26.
 */
angular.module("bjControll",[])
    .controller("serchContrl",function($scope,searchservice){
        $scope.search = function(){
            searchservice.getList().then(function(data){
                $scope.productList = data;
            })
        }
    })