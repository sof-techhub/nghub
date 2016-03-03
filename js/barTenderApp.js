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

//Routing 

barApp.config(function($stateProvider,$urlRouterProvider){
	 	     $urlRouterProvider.otherwise('/barTenderMainTemplate');
	 	     $stateProvider
	 	     .state('barTenderMainTemplate',{
	 	     	url:'/barTenderMainTemplate',
	 	     	controller:'barTendController',
	 	     	templateUrl:'templates/barTenderMainTemplate.html'
	 	     	
	 	     })
	 	     .state('barTenderResult',{
	 	     	url:'/barTenderResult/:bmpCount/:martCount/:margCount/:srewCount/:manhCount',
	 	     	controller:'barTenderResultController',
	 	     	templateUrl:'templates/barTenderResult.html',
	 	     });
	 	 });	

//Bar Tender Controller

barApp.controller('barTendController',function($scope,$state,barAppDataService){
	 	  var promise = barAppDataService.getData();
	 	  promise.then(function(data){
		  $scope.items = data.data.data;
	 	  });
 	  
//Bloody Merry Mix 
//Bloody Merry Mix Plus Button
	 $scope.bmpcount = 0;
	 $scope.bloodyMaryPlus = function(){
     // Getting The Latest Quantity Value
    	for (var i=0; i<$scope.items.length; i++){
			    if(($scope.items[i].name == "vodka")){
				     $scope.vodkaQty = $scope.items[i].qty;
			    }else if(($scope.items[i].name == "bloodymarymix")){
				     $scope.bloodymarmixQty = $scope.items[i].qty;
			    }else if(($scope.items[i].name == "celerystalks")){
				     $scope.celerystalksQty = $scope.items[i].qty;
			    }else{
				 //do nothing..
			 };
			};
// Subtracting ordered volume from stocked volume 
		
		$scope.newQtyforVodka = $scope.vodkaQty - 2;
		$scope.newQtyforbloodymerrymix = $scope.bloodymarmixQty - 4;
		$scope.newreduceQtyforcelerystalks = $scope.celerystalksQty - 1;
		
// checking if ordered volume is lower than stocked volume 
		
		if(($scope.newQtyforVodka<=0) || ($scope.newQtyforbloodymerrymix<=0) || ($scope.newreduceQtyforcelerystalks<=0)){
			    alert("Sorry!!NO more Bloody Merry Mix");
			    
			}else{
				// Pushing new volume value into main array
				$scope.bmpcount++;
				for( var i=0; i<$scope.items.length; i++){
					if(($scope.items[i].name == "vodka")){
					     $scope.items[i].qty = $scope.newQtyforVodka;
				    }else if(($scope.items[i].name == "bloodymarymix")){
					    $scope.items[i].qty = $scope.newQtyforbloodymerrymix;
				    }else if(($scope.items[i].name == "celerystalks")){
					     $scope.items[i].qty = $scope.newreduceQtyforcelerystalks;
				    }else{
					 //do nothing..
				 };
			   };
		};
    };
// End of BloodyMerryMix plus button function

//Bloody Merry Mix Minus Button
     $scope.bloodyMaryMinus = function(){
    	      // console.log($scope.bmpcount);
		    if ($scope.bmpcount == 0){
			   $scope.bmpcount = 0;
			   alert("NO order");
		  }else{$scope.bmpcount--;
			  // Getting Latest Quantity value 
			     for (var i=0; i<$scope.items.length; i++){
				      if(($scope.items[i].name == "vodka")){
					     $scope._vodkaQty = $scope.items[i].qty;
				      }else if(($scope.items[i].name == "bloodymarymix")){
					     $scope._bloodymarmixQty = $scope.items[i].qty;
				      }else if(($scope.items[i].name == "celerystalks")){
					     $scope._celerystalksQty = $scope.items[i].qty;
				      }else{
					 //do nothing..
				   }; 
				}; 
 // Adding ordered volume from stocked volume 
					
					$scope._newQtyforVodka = $scope._vodkaQty + 2;
					$scope._newQtyforbloodymerrymix = $scope._bloodymarmixQty + 4;
					$scope._newreduceQtyforcelerystalks = $scope._celerystalksQty + 1;
		 		  
		  if(($scope._newQtyforVodka>750) || ($scope._newQtyforbloodymerrymix>700) || ($scope._newreduceQtyforcelerystalks>16)){
			    alert("NO More order");
			}else{
				// Pushing new volume value into main array
				
				for( var i=0; i<$scope.items.length; i++){
					if(($scope.items[i].name == "vodka")){
					     $scope.items[i].qty = $scope._newQtyforVodka;
				    }else if(($scope.items[i].name == "bloodymarymix")){
					    $scope.items[i].qty = $scope._newQtyforbloodymerrymix;
				    }else if(($scope.items[i].name == "celerystalks")){
					     $scope.items[i].qty = $scope._newreduceQtyforcelerystalks;
				    }else{
					 //do nothing..
				 };
			   };
		};
     }; /*end else*/
  };
//Martini	
	
//Martini Plus Button	
	  $scope.martcount = 0;
      $scope.martiniPlus = function(){
	
       // Getting The Latest Quantity Value
		for (var i=0; i<$scope.items.length; i++){
			    if(($scope.items[i].name == "gin")){
				     $scope.ginQty = $scope.items[i].qty;
			    }else if(($scope.items[i].name == "dryvermouth")){
				     $scope.dryvermouthQty = $scope.items[i].qty;
			    }else if(($scope.items[i].name == "olives")){
				     $scope.olivesQty = $scope.items[i].qty;
			    }else{
				 //do nothing..
			 };
			};
				
// Subtracting ordered volume from stocked volume 
		
		$scope.newQtyforgin = $scope.ginQty - 2;
		$scope.newQtyfordryvermouth = $scope.dryvermouthQty - 1;
		$scope.newreduceQtyforolives = $scope.olivesQty - 1;
		
// checking if ordered volume is lower than stocked volume 
		
		if(($scope.newQtyforgin<=0) || ($scope.newQtyfordryvermouth<=0) || ($scope.newreduceQtyforolives<=0)){
			    alert("Sorry!!NO more Martini");
			    
			}else{
				// Pushing new volume value into main array
				$scope.martcount++;
				for( var i=0; i<$scope.items.length; i++){
					if(($scope.items[i].name == "gin")){
					     $scope.items[i].qty = $scope.newQtyforgin;
				    }else if(($scope.items[i].name == "dryvermouth")){
					    $scope.items[i].qty = $scope.newQtyfordryvermouth;
				    }else if(($scope.items[i].name == "olives")){
					     $scope.items[i].qty = $scope.newreduceQtyforolives;
				    }else{
					 //do nothing..
				 };
			   };
		};
   };
   
//Martini Minus Button
   
       $scope.martiniMinus = function(){
	 
	      if ($scope.martcount == 0){
		       $scope.martcount = 0;
		       alert("NO order");
	      }else{$scope.martcount--;
      // Getting Latest Quantity value 
	     for (var i=0; i<$scope.items.length; i++){
		    if(($scope.items[i].name == "gin")){
			     $scope._ginQty = $scope.items[i].qty;
		    }else if(($scope.items[i].name == "dryvermouth")){
			     $scope._dryvermouthQty = $scope.items[i].qty;
		    }else if(($scope.items[i].name == "olives")){
			     $scope._olivesQty = $scope.items[i].qty;
		    }else{
			 //do nothing..
		 };
		};
						
// Adding ordered volume from stocked volume 
				
				$scope._newQtyforgin = $scope._ginQty + 2;
				$scope._newQtyfordryvermouth = $scope._dryvermouthQty + 1;
				$scope._newreduceQtyforolives = $scope._olivesQty + 1;
	 
	  if(($scope._newQtyforgin>2) || ($scope._newQtyfordryvermouth>750) || ($scope._newreduceQtyforolives>24)){
		    alert("NO More order");
		}else{
			// Pushing new volume value into main array
			
			for( var i=0; i<$scope.items.length; i++){
				if(($scope.items[i].name == "gin")){
				     $scope.items[i].qty = $scope._newQtyforgin;
			    }else if(($scope.items[i].name == "dryvermouth")){
				    $scope.items[i].qty = $scope._newQtyfordryvermouth;
			    }else if(($scope.items[i].name == "olives")){
				     $scope.items[i].qty = $scope._newreduceQtyforolives;
			    }else{
				 //do nothing..
			 };
		   };
	   };
    };/*end else*/
 };
   
//Margarita  
   
//Margarita Plus Button
     $scope.margcount = 0;
     $scope.margaritaPlus = function(){
    	 
      //Getting The Latest Quantity Value
		for (var i=0; i<$scope.items.length; i++){
 			    if(($scope.items[i].name == "tequila")){
 				     $scope.tequilaQty = $scope.items[i].qty;
 			    }else if(($scope.items[i].name == "orangejuice")){
 				     $scope.orangejuiceQty = $scope.items[i].qty;
 			    }else if(($scope.items[i].name == "agavenectar")){
 				     $scope.agavenectarQty = $scope.items[i].qty;
 			    }else if(($scope.items[i].name == "limes")){
 				     $scope.limeQty = $scope.items[i].qty;
 			    }
 			    else{
 				 //do nothing..
 			 };
		};
 		 		
// Subtracting ordered volume from stocked volume 
 		
 		$scope.newQtyfortequila = $scope.tequilaQty - 2;
 		$scope.newQtyfororangejuice = $scope.orangejuiceQty - 1;
 		$scope.newQtyforagavenectar = $scope.agavenectarQty - 1;
 		$scope.newreduceQtyforlime = $scope.limeQty - 1;
 		
// checking if ordered volume is lower than stocked volume 
 		
 		if(($scope.newQtyfortequila<=0) || ($scope.newQtyfororangejuice<=0) || ($scope.newQtyforagavenectar<=0) || ($scope.newreduceQtyforlime<=0)){
 			    alert("Sorry!!NO more Margarite");
 			    
 			}else{
 				// Pushing new volume value into main array
 				$scope.margcount++;
 				for( var i=0; i<$scope.items.length; i++){
 					if(($scope.items[i].name == "tequila")){
 					     $scope.items[i].qty = $scope.newQtyfortequila;
 				    }else if(($scope.items[i].name == "orangejuice")){
 					    $scope.items[i].qty = $scope.newQtyfororangejuice;
 				    }else if(($scope.items[i].name == "agavenectar")){
 					     $scope.items[i].qty = $scope.newQtyforagavenectar;
 				    }else if(($scope.items[i].name == "limes")){
 					     $scope.items[i].qty = $scope.newreduceQtyforlime;
 				    }
 				    else{
 					 //do nothing..
 				 };
 			   };
 		 };
    };
//Margarita Minus Button
   
          $scope.margaritaMinus = function(){
    	 
		    if ($scope.margcount == 0){
			   $scope.margcount = 0;
			   alert("NO order");
		    }else{$scope.margcount--;
			  // Getting Latest Quantity value 
			     for (var i=0; i<$scope.items.length; i++){
				      if(($scope.items[i].name == "tequila")){
					     $scope._tequilaQty = $scope.items[i].qty;
				      }else if(($scope.items[i].name == "orangejuice")){
					     $scope._orangejuiceQty = $scope.items[i].qty;
				      }else if(($scope.items[i].name == "agavenectar")){
					     $scope._agavenectarQty = $scope.items[i].qty;
				      }else if(($scope.items[i].name == "limes")){
					     $scope._limesQty = $scope.items[i].qty;
				      }
				      else{
					 //do nothing..
				   }; 
				}; 
						  				
// Adding ordered volume from stocked volume 
					
					$scope._newQtyfortequila = $scope._tequilaQty + 2;
					$scope._newQtyfororangejuice = $scope._orangejuiceQty + 1;
					$scope._newQtyforagavenectar = $scope._agavenectarQty + 1;
					$scope._newreduceQtyforlimes = $scope._limesQty + 1;
		  
		  if(($scope._newQtyfortequila>750) || ($scope._newQtyfororangejuice>48) || ($scope._newQtyforagavenectar>24) || ($scope._newreduceQtyforlimes>36)){
			    alert("NO More order");
			}else{
				// Pushing new volume value into main array
				
				for( var i=0; i<$scope.items.length; i++){
					if(($scope.items[i].name == "tequila")){
					     $scope.items[i].qty = $scope._newQtyfortequila;
				    }else if(($scope.items[i].name == "orangejuice")){
					    $scope.items[i].qty = $scope._newQtyfororangejuice;
				    }else if(($scope.items[i].name == "agavenectar")){
					     $scope.items[i].qty = $scope._newQtyforagavenectar;
				    }else if(($scope.items[i].name == "limes")){
					     $scope.items[i].qty = $scope._newreduceQtyforlimes;
				    }
				    else{
					 //do nothing..
				 };
			   };
		};
     };/*end else*/
  };
//Srewdriver
   
//Srewdriver Plus Button
     $scope.srewcount = 0;
     $scope.srewdriverPlus = function(){
    	 
      // Getting The Latest Quantity Value
 		for (var i=0; i<$scope.items.length; i++){
 			    if(($scope.items[i].name == "vodka")){
 				     $scope.svodkaQty = $scope.items[i].qty;
 			    }else if(($scope.items[i].name == "orangejuice")){
 				     $scope.sorangejuiceQty = $scope.items[i].qty;
 			    }else{
 				 //do nothing..
 			 };
 			};
 		 		
// Subtracting ordered volume from stocked volume 
 		
 		$scope.newQtyforsVodka = $scope.svodkaQty - 2;
 		$scope.newQtyforsorangejuice = $scope.sorangejuiceQty -4;
 		
 		
// checking if ordered volume is lower than stocked volume 
 		
 		if(($scope.newQtyforsVodka<=0) || ($scope.newQtyforsorangejuice<=0)){
 			    alert("Sorry!!NO more Srewdriver");
 			}else{
 				// Pushing new volume value into main array
 				$scope.srewcount++;
 				for( var i=0; i<$scope.items.length; i++){
 					if(($scope.items[i].name == "vodka")){
 					     $scope.items[i].qty = $scope.newQtyforsVodka;
 				    }else if(($scope.items[i].name == "orangejuice")){
 					    $scope.items[i].qty = $scope.newQtyforsorangejuice;
 				    }else{
 					 //do nothing..
 				 };
 			   };
 		};
    };
//Srewdriver Minus Button
     
       $scope.srewdriverMinus = function(){
    	 
	      // console.log($scope.bmpcount);
		    if ($scope.srewcount == 0){
			    $scope.srewcount = 0;
			    alert("NO order");
		  }else{$scope.srewcount--;
			  // Getting Latest Quantity value 
			     for (var i=0; i<$scope.items.length; i++){
				      if(($scope.items[i].name == "vodka")){
					     $scope._svodkaQty = $scope.items[i].qty;
				      }else if(($scope.items[i].name == "orangejuice")){
					     $scope._sorangejuiceQty = $scope.items[i].qty;
				      }else{
					 //do nothing..
				   }; 
				}; 
						  				
// Adding ordered volume from stocked volume 
					
					$scope._newQtyforsVodka = $scope._svodkaQty + 2;
					$scope._newQtyforsorangejuice = $scope._sorangejuiceQty + 4;
	  
		  if(($scope._newQtyforsVodka>750) || ($scope._newQtyforsorangejuice>48)){
			    alert("NO More order");
			}else{
				// Pushing new volume value into main array
				
				for( var i=0; i<$scope.items.length; i++){
					if(($scope.items[i].name == "vodka")){
					     $scope.items[i].qty = $scope._newQtyforsVodka;
				    }else if(($scope.items[i].name == "orangrjuice")){
					    $scope.items[i].qty = $scope._newQtyforsorangejuice;
				    }else{
					 //do nothing..
				 };
			   };
		};
     };/*end else*/
 };

//Manhattan
   
//Manhattan Plus Button
     $scope.manhcount = 0;
     $scope.manhattanPlus = function(){
    	 
      // Getting The Latest Quantity Value
 		for (var i=0; i<$scope.items.length; i++){
 			    if(($scope.items[i].name == "whiskey")){
 				     $scope.wiskeyQty = $scope.items[i].qty;
 			    }else if(($scope.items[i].name == "sweetvermouth")){
 				     $scope.sweetvermouthQty = $scope.items[i].qty;
 			    }else if(($scope.items[i].name == "cherries")){
 				     $scope.cherriesQty = $scope.items[i].qty;
 			    }else{
 				 //do nothing..
 			 };
		};
 		
// Subtracting ordered volume from stocked volume 
 		
 		$scope.newQtyforwiskey = $scope.wiskeyQty - 2;
 		$scope.newQtyforsweetvermouth = $scope.sweetvermouthQty - 1;
 		$scope.newreduceQtyforcherries = $scope.cherriesQty - 1;
 		
// checking if ordered volume is lower than stocked volume 
 		
 		if(($scope.newQtyforwiskey<=0) || ($scope.newQtyforsweetvermouth<=0) || ($scope.newreduceQtyforcherries<=0)){
 			    alert("Sorry!!NO more Manhattan");
 			    
 			}else{
 				// Pushing new volume value into main array
 				$scope.manhcount++;
 				for( var i=0; i<$scope.items.length; i++){
 					if(($scope.items[i].name == "whiskey")){
 					     $scope.items[i].qty = $scope.newQtyforwiskey;
 				    }else if(($scope.items[i].name == "sweetvermouth")){
 					    $scope.items[i].qty = $scope.newQtyforsweetvermouth;
 				    }else if(($scope.items[i].name == "cherries")){
 					     $scope.items[i].qty = $scope.newreduceQtyforcherries;
 				    }else{
 					 //do nothing..
 				 };
 			   };
 		};
  };
//Manhattan Minus Button
     
     $scope.manhattanMinus = function(){
    	
	      // console.log($scope.bmpcount);
		    if ($scope.manhcount == 0){
			   $scope.manhcount = 0;
 			   alert("NO order");
		  }else{$scope.manhcount--;
			  // Getting Latest Quantity value 
			     for (var i=0; i<$scope.items.length; i++){
				      if(($scope.items[i].name == "whiskey")){
					     $scope._wiskeyQty = $scope.items[i].qty;
				      }else if(($scope.items[i].name == "sweetvermouth")){
					     $scope._sweetvermouthQty = $scope.items[i].qty;
				      }else if(($scope.items[i].name == "cherries")){
					     $scope._cherriesQty = $scope.items[i].qty;
				      }else{
					 //do nothing..
				   }; 
				}; 
				
// Adding ordered volume from stocked volume 
					
					$scope._newQtyforwiskey = $scope._wiskeyQty + 2;
					$scope._newQtyforsweetvermouth = $scope._sweetvermouthQty + 1;
					$scope._newreduceQtyforcherries = $scope._cherriesQty + 1;
  
		  if(($scope._newQtyforwiskey>750) || ($scope._newQtyforsweetvermouth>750) || ($scope._newreduceQtyforcherries>9)){
			    alert("NO More order");
			}else{
				// Pushing new volume value into main array
				
				for( var i=0; i<$scope.items.length; i++){
					if(($scope.items[i].name == "whiskey")){
					     $scope.items[i].qty = $scope._newQtyforwiskey;
				    }else if(($scope.items[i].name == "sweetvermouth")){
					    $scope.items[i].qty = $scope._newQtyforsweetvermouth;
				    }else if(($scope.items[i].name == "cherries")){
					     $scope.items[i].qty = $scope._newreduceQtyforcherries;
				    }else{
					 //do nothing..
				 };
			   };
		    };
        };/*end else*/
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
