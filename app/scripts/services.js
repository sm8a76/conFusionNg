'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .factory('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
                var menufac = {};
        
                menufac.getDishes = function(){
                                        return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                };    
            
                menufac.getPromotions = function(){
                                        return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
                };            
            

                return menufac;    

        }]).factory('corporateFactory', ['$resource', 'baseURL',  function($resource,baseURL) {

            var corpfac = {};

            corpfac.getLeaders = function(){
                                        return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
            };      
    
            return corpfac;
    
        }]).factory('feedbackFactory', ['$resource', 'baseURL',  function($resource,baseURL) {

            var feedbackfac = {};

            feedbackfac.getFeedback = function(){
                                        return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }});
            };      
    
            return feedbackfac;
    
        }]);