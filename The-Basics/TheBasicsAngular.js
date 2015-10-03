angular.module("indexModule")
	.controller("theBasicsController", ["$scope", function($scope){
		$scope.ingredientsState = true;
		$scope.equipmentState = false;

		$scope.activateTab = function(){
			$scope.ingredientsState = !$scope.ingredientsState;
			$scope.equipmentState = !$scope.equipmentState;
		}

		$scope.ingredients = [
			{
				alias: "Hops",
				description: "Hops provide beer with four attributes: \n Bitterness: Bitterness is essential to the flavor balance of the beer; it offsets the sweetness of the malt. \n Flavor: Hops have flavor that’s distinctly different from bitterness, and it adds to the overall complexity of the beer. \n Aroma: The piquant aroma of hops, which mirrors their flavor, is derived from essential oils in the hops. \n"
			},
			{
				alias: "Grains",
				description: "Grain provides five things to beer:"+
								"Color: The color of the grains used to make a beer directly affects the color of the beer itself."+
								"Flavor: The flavor of the beer is primarily that of malted barley, although hops and yeast characteristics play a secondary role."+
								"Maltose: Maltose is the term for the fermentable sugars derived from malted grain. Yeast converts these sugars into alcohol and carbon dioxide."+
								"Proteins: Proteins in the grain help form and hold the head (foam) on the beer."+
								"Dextrins: Dextrins are the grain components that help create mouthfeel (the feeling of fullness or viscosity) in the beer."
			},
			{
				alias: "Yeast",
				description: "Grain provides five things to beer:"+
								"Color: The color of the grains used to make a beer directly affects the color of the beer itself."+
								"Flavor: The flavor of the beer is primarily that of malted barley, although hops and yeast characteristics play a secondary role."+
								"Maltose: Maltose is the term for the fermentable sugars derived from malted grain. Yeast converts these sugars into alcohol and carbon dioxide."+
								"Proteins: Proteins in the grain help form and hold the head (foam) on the beer."+
								"Dextrins: Dextrins are the grain components that help create mouthfeel (the feeling of fullness or viscosity) in the beer."
			},
		];
	}]);
	