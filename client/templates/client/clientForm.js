Template.clientForm.helpers({
    email() {
        return Meteor.user().emails[0].address;
    }
});
Template.clientForm.events({
    'click .btn-primary': function(event){
        
        event.preventDefault();
        var code = $('[name=code]').val();
        var date = $('[name=date]').val();
        var nameClient = $('[name=nameClient]').val();
        var ci = $('[name=ci]').val();
        var address = $('[name=address]').val();
        var tel = $('[name=tel]').val();
        var ref = $('[name=ref]').val();
        var currentUser = Meteor.userId();
        
        Clients.insert({
            code: code,
            date: date,
            nameClient: nameClient,
            ci: ci,
            address: address,
            tel: tel,
            ref: ref,
            createdBy: currentUser
        }, function (error, results) {
            console.log(error);
            
        });
        $('[name=code]').val('');
        $('[name=date]').val('');
        $('[name=nameClient]').val('');
        $('[name=ci]').val('');
        $('[name=address]').val('');
        $('[name=tel]').val('');
        $('[name=ref]').val('');
    }
});