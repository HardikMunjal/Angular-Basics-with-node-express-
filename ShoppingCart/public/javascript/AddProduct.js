/**
 * New node file
 */

var myApp = angular.module('myApp', []);

// Create the controller, the 'ToddlerCtrl' parameter 
// must match an ng-controller directive
myApp.controller('ToddlerCtrl', function ($scope) {
  
  // Define an array of Toddler objects
	
	
	
	
	
	$scope.data =  [{
		   "category":"Cables",
		    "subCategories":[
		    {
		        "subCategory":"Sub Category 1"

		    },
		    {
		        "subCategory":"Sub Category 2"
		    }
		   ]
		  },
		{
		   "category":"Wallplates & Boxes",
		   "subCategories":[
		    {
		        "subCategory":"Sub Category 6"
		    },
		    {
		        "subCategory":"Sub Category 5"
		    }
		  ]
		 },
		{
		  "category":"Media Distribution",
		  "subCategories":[
		      {
		        "subCategory":"Sub Category 3"
		     },
		      {
		        "subCategory":"Sub Category 4"
		     }
		 ]
		}];
	
  $scope.toddlers = [
                     {
                         "MainCategory": "Electronics",
                         "category":[
                             {
                                "categoryName": "mobile",

                                "subcategory":[
                                      
                                      {
                                         "subcategoryName":"nokia",
                                         "subcategoryId":"sc1"
                                      },
                                      
                                      {
                                         "subcategoryName":"samsung",
                                         "subcategoryId":"sc2"
                                      }
                                          ],

                                 "categoryId":"c1"     
                           
                             }, 
                             {
                                 "categoryName": "laptop",

                                 "subcategory":[
                                      
                                      {
                                         "subcategoryName":"dell",
                                         "subcategoryId":"sc3"
                                      },
                                      
                                      {
                                         "subcategoryName":"lenovo",
                                         "subcategoryId":"sc4"
                                      }
                                            ],
                                 "categoryId":"c2"        

                           
                            },
                            {
                                 "categoryName": "Homeappliances",

                                 "subcategory":[
                                      
                                      {
                                         "subcategoryName":"press",
                                         "subcategoryId":"sc5"
                                      },
                                      
                                      {
                                         "subcategoryName":"washing machine",
                                         "subcategoryId":"sc6"
                                      }
                                            ],
                                "categoryId":"c3"        

                           
                             }],
                      "MainCategoryId":"m1"

              },
                      {
                         "MainCategory": "Men",
                         "category":[
                             {
                                "categoryName": "Fashion",

                                "subcategory":[
                                      
                              {

                               "subcategoryName":"Tshirts",
                               "subcategoryId":"sc7",
                               "size":["L","XL","XXL"],
                               "color":["red","green","blue"]
                                  
                                    
                              },
                                      
                              {
                               "subcategoryName":"shirts",
                               "subcategoryId":"sc8",
                               "size":["L","XL","XXL"],
                               "color":["red","green","blue"]
                                  
                              }
                                          ],

                                 "categoryId":"12"     
                           
                             }, 
                             {
                                 "categoryName": "Footwear",

                                 "subcategory":[
                                      
                                      {
                                         "subcategoryName":"puma",
                                         "subcategoryId":"sc9"
                                      },
                                      
                                      {
                                         "subcategoryName":"reebok",
                                         "subcategoryId":"sc10"
                                      }
                                            ],
                                 "categoryId":"13"        

                           
                            },
                            {
                                 "categoryName": "jewellery",

                                 "subcategory":[
                                      
                                      {
                                         "subcategoryName":"tanishq",
                                         "subcategoryId":"123"
                                      },
                                      
                                      {
                                         "subcategoryName":"samsung",
                                         "subcategoryId":"123456"
                                      }
                                            ],
                                "categoryId":"13"        

                           
                             }],
                      "MainCategoryId":"m1"

              },
                      {
                         "MainCategory": "Women",
                         "category":[
                             {
                                "categoryName": "Women Fashion",

                                "subcategory":[
                                      
                                      {
                                         "subcategoryName":"suit",
                                         "subcategoryId":"123555"
                                      },
                                      
                                      {
                                         "subcategoryName":"sarees",
                                         "subcategoryId":"123456"
                                      }
                                          ],

                                 "categoryId":"12"     
                           
                             }, 
                             {
                                 "categoryName": "undergarments",

                                 "subcategory":[
                                      
                                      {
                                         "subcategoryName":"bra",
                                         "subcategoryId":"123"
                                      },
                                      
                                      {
                                         "subcategoryName":"penties",
                                         "subcategoryId":"123456"
                                      }
                                            ],
                                 "categoryId":"13"        

                           
                            },
                            {
                                 "categoryName": "womenFootwear",

                                 "subcategory":[
                                      
                                      {
                                         "subcategoryName":"sendels",
                                         "subcategoryId":"123"
                                      },
                                      
                                      {
                                         "subcategoryName":"belly",
                                         "subcategoryId":"123456"
                                      }
                                            ],
                                "categoryId":"13"        

                           
                             }],
                      "MainCategoryId":"m1"

              },
                      {
                         "MainCategory": "Home appliances",
                         "category":[
                             {
                                "categoryName": "Furniture",

                                "subcategory":[
                                      
                                      {
                                         "subcategoryName":"sofa",
                                         "subcategoryId":"123555"
                                      },
                                      
                                      {
                                         "subcategoryName":"bed",
                                         "subcategoryId":"123456"
                                      }
                                          ],

                                 "categoryId":"12"     
                           
                             }, 
                             {
                                 "categoryName": "books",

                                 "subcategory":[
                                      
                                      {
                                         "subcategoryName":"science fiction",
                                         "subcategoryId":"123"
                                      },
                                      
                                      {
                                         "subcategoryName":"dedications",
                                         "subcategoryId":"123456"
                                      }
                                            ],
                                 "categoryId":"13"        

                           
                            },
                            {
                                 "categoryName": "basic appliance",

                                 "subcategory":[
                                      
                                      {
                                         "subcategoryName":"bag",
                                         "subcategoryId":"123"
                                      },
                                      
                                      {
                                         "subcategoryName":"charger",
                                         "subcategoryId":"123456"
                                      }
                                            ],
                                "categoryId":"13"        

                           
                             }],
                      "MainCategoryId":"m1"

              }
                       ];
  
  
  
  $scope.data =  [{
	   "category":"Cables",
	    "subCategories":[
	    {
	        "subCategory":"Sub Category 1"

	    },
	    {
	        "subCategory":"Sub Category 2"
	    }
	   ]
	  },
	{
	   "category":"Wallplates & Boxes",
	   "subCategories":[
	    {
	        "subCategory":"Sub Category 6"
	    },
	    {
	        "subCategory":"Sub Category 5"
	    }
	  ]
	 },
	{
	  "category":"Media Distribution",
	  "subCategories":[
	      {
	        "subCategory":"Sub Category 3"
	     },
	      {
	        "subCategory":"Sub Category 4"
	     }
	 ]
	 
	 
	 
	}];
  $scope.foddlers=$scope.toddlers;
  

  
});


  