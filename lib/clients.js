Clients = new Meteor.Collection('clients');

Clients.allow({ insert: () => true });
// Clients.allow({
//     insert: function() {
        
//       return doc.userId === userId;
//     }
//   });