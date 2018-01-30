Template.login.events({
    'click .js-signin': function () {
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error.reason);
            } else {
                Router.go("/");
            }
        });

        // Meteor.loginWithTwitter({loginStyle: 'redirect'});
    }
});
