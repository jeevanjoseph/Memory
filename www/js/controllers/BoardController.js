angular.module('memory.controllers', [])

.controller('BoardCtrl',function($scope,$timeout) {
  $scope.cards = [];
  $scope.selected = null;
  $scope.gridSize = 5;
  $scope.open='hover';
  $scope.generateCards = function(){
    var pool = [];
    var shadows =[];
    for(var cnt=0;cnt<$scope.gridSize;cnt++){
      // var num    = {val : Math.ceil(Math.random()*100)}
      // var shadow = Math.floor(Math.random()*100)
      // while($scope.cards.indexOf(num)>-1){
      //   num    = {val :  Math.ceil(Math.random()*10)}
      // }
      // $scope.cards.splice(cnt,0,num);
      //
      // while(shadow>$scope.cards.length){
      //   shadow = Math.floor(Math.random()*100)
      // }
      // $scope.cards.splice(shadow,0,num);
      pool[cnt]= {val:cnt};
      shadows[cnt]= {val:cnt};
    }

    for(cnt=0;cnt<pool.length;cnt++){
      var shadow = Math.floor(Math.random()*100)
      $scope.cards.push(pool[cnt]);

      while(shadow>$scope.cards.length){
         shadow = Math.floor(Math.random()*100)
       }
       $scope.cards.splice(shadow,0,shadows[cnt]);
    }

    console.log($scope.cards);
  }

  $scope.shuffle = function(){

  }

  $scope.selectCard = function(card){
    card.open = 'flip';
    // console.log('select');
    //$scope.$apply();
    $timeout(function(){
        $scope.validateMatch(card);
      },1000);
  }
  $scope.validateMatch = function(card){
    // console.log('cb');
    if($scope.selected == card){
      console.log('its open, pick another card');
      return;
    }
    if(card.matched){
      console.log('its matched, pick another card');
      return;
    }
    if($scope.selected){

      if($scope.selected.val == card.val ){
        //$scope.selected.open='';
        //card.open='';
        $scope.selected.matched=true;
        card.matched=true
        // var idx = $scope.cards.indexOf($scope.selected);
        //$scope.cards.splice(idx,1);
        // idx = $scope.cards.indexOf(card);
        //$scope.cards.splice(idx,1);

      }else{
        $scope.selected.open='';
        card.open='';
      }
        $scope.selected = null;
    }else{
      $scope.selected = card;
    }
  }
  $scope.generateCards();
})
