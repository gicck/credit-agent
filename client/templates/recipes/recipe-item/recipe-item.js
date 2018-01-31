Template.recipeItem.helpers({
  path: function () {
    debugger
    return Router.path('recipe', this.recipe);
  },
  
  highlightedClass: function () {
    if (this.size === 'large')
      return 'highlighted';
  },
  
  bookmarkCount: function () {
    var count = BookmarkCounts.findOne({recipeName: this.name});
    return count && count.count;
  }
});