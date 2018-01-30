// If the auth overlay is on the screen but the user is logged in,
//   then we have come back from the loginWithTwitter flow,
//   and the user has successfully signed in.
//
// We have to use an autorun for this as callbacks get lost in the
//   redirect flow.
Template.authOverlay.onCreated(function (){
  this.autorun(function () {
    if (Meteor.userId() && Overlay.template() === 'authOverlay')
      Overlay.close();
  });
});

Template.authOverlay.events({
  'click .js-signin': function (){
    debugger
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      email: email,
      password: password
    }, function(error) {
      if (error) {
        console.log(error.reason); // Output error if registration fails
      } else {
        Router.go("/"); // Redirect user if registration succeeds
      };
    });
  }
});
