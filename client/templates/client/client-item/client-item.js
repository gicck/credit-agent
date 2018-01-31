Template.clientItem.helpers({
    path: function () {
      return Router.path('client', this.client);
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