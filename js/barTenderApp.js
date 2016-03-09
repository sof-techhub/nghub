var barApp = angular.module('barTendApp',['ui.router']);
//Service Getting JSON data

barApp.service('barAppDataService',function($http ,$q){
	 var deferred = $q.defer();
	 $http.get('jsondata/data.json').then(function(data){
		    deferred.resolve(data); 
	  });
	  this.getData = function(){
		  return deferred.promise;
	  };   
});
// Plus Button Service
barApp.service('calculateDataForPlusService',function(barAppDataService){
	 var promise = barAppDataService.getData();
	  promise.then(function(data){
	  items = data.data.data;
	});
	 this.getQty = function(num,item1,item2,item3,item4){
		 var qtyForItems = [];

		 for (var i=0; i<items.length; i++){
			    if((items[i].name == item1)){
			    	qtyForItems.push(items[i].qty);
			    }else if((items[i].name == item2)){
			    	qtyForItems.push(items[i].qty);
			    }else if((items[i].name == item3)){
			    	qtyForItems.push(items[i].qty);
			    }else if((items[i].name == item4)){
			    	qtyForItems.push(items[i].qty);
			    }else{
				 //do nothing..
			 };
			};
			var reducedQtyForItem1;
			var reducedQtyForItem2;
			var reducedQtyForItem3;
			var reducedQtyForItem4;
			
			if(num == 1){
				    reducedQtyForItem1 = qtyForItems[0] - 2;
				    reducedQtyForItem2 = qtyForItems[1] - 4;
			        reducedQtyForItem3 = qtyForItems[2] - 1;
			}else if(num == 2){
				    reducedQtyForItem1 = qtyForItems[0] - 2;
				    reducedQtyForItem2 = qtyForItems[1] - 1;
				    reducedQtyForItem3 = qtyForItems[2] - 1;
			}else if(num == 3){
				    reducedQtyForItem1 = qtyForItems[0] - 2;
				    reducedQtyForItem2 = qtyForItems[1] - 1;
				    reducedQtyForItem3 = qtyForItems[2] - 1;
				    reducedQtyForItem4 = qtyForItems[3] - 1;
			}else if(num == 4){
				   reducedQtyForItem1 = qtyForItems[0] - 2;
				   reducedQtyForItem2 = qtyForItems[1] - 4;
			}else if(num == 5){
				   reducedQtyForItem1 = qtyForItems[0] - 2;
				   reducedQtyForItem2 = qtyForItems[1] - 1;
				   reducedQtyForItem3 = qtyForItems[2] - 1;
			}
			else{
				//Do Nothing..
			};
			
			if((reducedQtyForItem1<=0)||(reducedQtyForItem2<=0)||(reducedQtyForItem3<=0)||(reducedQtyForItem4<=0)){
				 alert("No more drink");
				 return false;
		   }else{
			   
			   for (var i=0; i<items.length; i++){
				    if((items[i].name == item1)){
				    	items[i].qty = reducedQtyForItem1;
				    }else if((items[i].name == item2)){
				    	items[i].qty = reducedQtyForItem2;
				    }else if((items[i].name == item3)){
				    	items[i].qty = reducedQtyForItem3;
				    }else if((items[i].name == item4)){
				    	items[i].qty = reducedQtyForItem4;
				    }else{
					 //do nothing..
				 };
				};
			   //Do Nothing..
		   }
			return qtyForItems;
		   
		 } 
});	

//Minus Button Service
barApp.service('calculateDataForMinusService',function(barAppDataService){
	 var promise = barAppDataService.getData();
	  promise.then(function(data){
	  items = data.data.data;
	});
	 this.getQty = function(num,item1,item2,item3,item4){
		 var qtyForItems = [];

		 for (var i=0; i<items.length; i++){
			    if((items[i].name == item1)){
			    	qtyForItems.push(items[i].qty);
			    }else if((items[i].name == item2)){
			    	qtyForItems.push(items[i].qty);
			    }else if((items[i].name == item3)){
			    	qtyForItems.push(items[i].qty);
			    }else if((items[i].name == item4)){
			    	qtyForItems.push(items[i].qty);
			    }else{
				 //do nothing..
			 };
			};
			var increaseQtyForItem1;
			var increaseQtyForItem2;
			var increaseQtyForItem3;
			var increaseQtyForItem4;
			
			if(num == 1){
				    increaseQtyForItem1 = qtyForItems[0] + 2;
				    increaseQtyForItem2 = qtyForItems[1] + 4;
				    increaseQtyForItem3 = qtyForItems[2] + 1;
			}else if(num == 2){
				    increaseQtyForItem1 = qtyForItems[0] + 2;
				    increaseQtyForItem2 = qtyForItems[1] + 1;
				    increaseQtyForItem3 = qtyForItems[2] + 1;
			}else if(num == 3){
				    increaseQtyForItem1 = qtyForItems[0] + 2;
				    increaseQtyForItem2 = qtyForItems[1] + 1;
				    increaseQtyForItem3 = qtyForItems[2] + 1;
				    increaseQtyForItem4 = qtyForItems[3] + 1;
			}else if(num == 4){
				   increaseQtyForItem1 = qtyForItems[0] + 2;
				   increaseQtyForItem2 = qtyForItems[1] + 4;
			}else if(num == 5){
				   increaseQtyForItem1 = qtyForItems[0] + 2;
				   increaseQtyForItem2 = qtyForItems[1] + 1;
				   increaseQtyForItem3 = qtyForItems[2] + 1;
			}
			else{
				//Do Nothing..
			};
			
			 for (var i=0; i<items.length; i++){
				    if((items[i].name == item1)){
				    	items[i].qty = increaseQtyForItem1;
				    }else if((items[i].name == item2)){
				    	items[i].qty = increaseQtyForItem2;
				    }else if((items[i].name == item3)){
				    	items[i].qty = increaseQtyForItem3;
				    }else if((items[i].name == item4)){
				    	items[i].qty = increaseQtyForItem4;
				    }else{
					 //do nothing..
				 };
				};
			   //Do Nothing..
		  
			return qtyForItems;
	 } 
});	
//Routing 

barApp.config(function($stateProvider,$urlRouterProvider){
	 	     $urlRouterProvider.otherwise('/barTenderMainTemplateCopy');
	 	     $stateProvider
	 	     .state('barTenderMainTemplateCopy',{
	 	     	url:'/barTenderMainTemplateCopy',
	 	     	controller:'barTendController',
	 	     	templateUrl:'templates/barTenderMainTemplateCopy.html'
	 	     	
	 	     })
	 	     .state('barTenderResultCopy',{
	 	     	url:'/barTenderResultCopy/:bmpCount/:martCount/:margCount/:srewCount/:manhCount',
	 	     	controller:'barTenderResultController',
	 	     	templateUrl:'templates/barTenderResultCopy.html',
	 	     });
	 	 });	

//Bar Tender Controller

barApp.controller('barTendController',function($scope,$state,barAppDataService,calculateDataForPlusService,calculateDataForMinusService){
	 	  var promise = barAppDataService.getData();
	 	  promise.then(function(data){
		  $scope.items = data.data.data;
	 	  });
 	  
 
// Plus Button
	 	  
	 	 $scope.bmpcount = 0;
	 	 $scope.martcount = 0;
	 	 $scope.margcount = 0;
	 	 $scope.srewcount = 0;
	 	 $scope.manhcount = 0;
	 $scope.Plus = function(num){
     // Getting The Latest Quantity Value
		 var item1,item2,item3,item4;
         if(num == 1){
        	 item1 = "vodka";
        	 item2 = "bloodymarymix";
        	 item3 = "celerystalks";
        	 $scope.bmpPlusData = calculateDataForPlusService.getQty(num,item1,item2,item3);
        	 if($scope.bmpPlusData == false){
        		 //Do Nothing
        	 }else{
        		 $scope.bmpcount++;
        	 }
        	 //console.log('Service Responce for bmp plus= ',$scope.bmpPlusData);
         }else if(num == 2){
        	 item1 = "gin";
        	 item2 = "dryvermouth";
        	 item3 = "olives";
        	 $scope.martPlusData = calculateDataForPlusService.getQty(num,item1,item2,item3);
        	 if($scope.martPlusData == false){
        		//Do Nothing
        	 }else{
        		 $scope.martcount++;
        	 }
        	 //console.log('Service Responce for mart plus= ',$scope.martPlusData);
         }else if(num == 3){
        	 item1 = "tequila";
        	 item2 = "orangejuice";
        	 item3 = "agavenectar";
        	 item4 = "limes"
        	 $scope.margPlusData = calculateDataForPlusService.getQty(num,item1,item2,item3,item4);
        	 if($scope.margPlusData == false){
        		//Do Nothing
        	 }else{
        		 $scope.margcount++;
        	 }
        	 //console.log('Service Responce for marg plus= ',$scope.margPlusData);
         }else if(num == 4){
        	 item1 = "vodka";
        	 item2 = "orangejuice";
        	 $scope.srewPlusData = calculateDataForPlusService.getQty(num,item1,item2);
        	 if($scope.srewPlusData == false){
        		//Do Nothing
        	 }else{
        		 $scope.srewcount++;
        	 }
        	 //console.log('Service Responce for srew plus= ',$scope.srewPlusData);
         }else if(num == 5){
        	 item1 = "whiskey";
        	 item2 = "sweetvermouth";
        	 item3 = "cherries";
        	 $scope.manhPlusData = calculateDataForPlusService.getQty(num,item1,item2,item3);
        	 if($scope.manhPlusData == false){
        		//Do Nothing
        	 }else{
        		 $scope.manhcount++;
        	 }
        	 //console.log('Service Responce for manh plus= ',$scope.manhPlusData);
         }else{
        	 //Do nothing..
         }		
    };
// End of plus button function

// Minus Button
     $scope.Minus = function(num){
    	 var item1,item2,item3,item4;    	 
    	 if(num == 1){
    		      if($scope.bmpcount == 0){
    			      $scope.bmpcount = 0;
    			      alert("No order");
    		         }else{
        	              item1 = "vodka";
        	              item2 = "bloodymarymix";
        	              item3 = "celerystalks";
        	              $scope.bmpMinusData = calculateDataForMinusService.getQty(num,item1,item2,item3);
        	              $scope.bmpcount--;
        	              //console.log('Service Responce for bmp Minus= ',$scope.bmpMinusData);
    		       }
         }else if(num == 2){
        	 if($scope.martcount == 0){
			      $scope.martcount = 0;
			      alert("No order");
		         }else{
        	          item1 = "gin";
        	          item2 = "dryvermouth";
        	          item3 = "olives";
        	          $scope.martMinusData = calculateDataForMinusService.getQty(num,item1,item2,item3);
        	          $scope.martcount--;
        	          //console.log('Service Responce for mart Minus= ',$scope.martMinusData);
		         }
         }else if(num == 3){
        	 if($scope.margcount == 0){
			      $scope.margcount = 0;
			      alert("No order");
		         }else{
        	          item1 = "tequila";
        	          item2 = "orangejuice";
        	          item3 = "agavenectar";
        	          item4 = "limes"
        	          $scope.margMinusData = calculateDataForMinusService.getQty(num,item1,item2,item3,item4);
        	          $scope.margcount--;
        	          //console.log('Service Responce for marg Minus= ',$scope.margMinusData);
		         }
         }else if(num == 4){
        	 if($scope.srewcount == 0){
			      $scope.srewcount = 0;
			      alert("No order");
		         }else{
        	          item1 = "vodka";
        	          item2 = "orangejuice";
        	          $scope.srewMinusData = calculateDataForMinusService.getQty(num,item1,item2);
        	          $scope.srewcount--;
        	          //console.log('Service Responce for srew Minus= ',$scope.srewMinusData);
		         }
         }else if(num == 5){
        	 if($scope.manhcount == 0){
			      $scope.manhcount = 0;
			      alert("No order");
		         }else{
        	          item1 = "whiskey";
        	          item2 = "sweetvermouth";
        	          item3 = "cherries";
        	          $scope.manhMinusData = calculateDataForMinusService.getQty(num,item1,item2,item3);
        	          $scope.manhcount--;
        	          //console.log('Service Responce for manh Minus= ',$scope.manhMinusData);
		         }
         }else{
        	 //Do nothing..
         }		
     }; 
});  
// result Page Controlller
barApp.controller('barTenderResultController',function($scope,$stateParams){
	
	$scope.bmpcount = $stateParams.bmpCount;
	$scope.martcount = $stateParams.martCount;
	$scope.margcount = $stateParams.margCount;
	$scope.srewcount = $stateParams.srewCount;
	$scope.manhcount = $stateParams.manhCount;
});
