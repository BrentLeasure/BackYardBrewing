var allRecipes = [];

var Recipe = function(recipe){
	this.beerAlias = recipe.beerAlias;
	this.selectedCategory = recipe.selectedCategory;
	this.description = recipe.description;
	this.recipe = recipe.recipe
	allRecipes.push(this);
}

module.exports = {
	allRecipes : allRecipes, 
	Recipe     : Recipe
}