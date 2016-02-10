angular.module('Gradients').directive('profileCategoryItem', function(){
        return {
                restrict: 'E',
                require: '^profileCategorySelect',
                scope: {
                        category: '='
                },
                templateUrl: './partials/category-item.html',
                link: function(scope, element, attrs, profileCategorySelectCtrl) {
                        scope.isActive = function(){
                                return profileCategorySelectCtrl.getActiveCategory === scope.category.name;
                        }
                        scope.makeActive = function(){
                                profileCategorySelectCtrl.setActiveCategory(scope.category);
                        }
                        scope.makeInactive = function(evt){
                                evt.stopPropagation();
                                profileCategorySelectCtrl.setActiveCategory(false);
                        }
                }
        }
});
