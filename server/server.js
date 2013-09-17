if (Meteor.isserver) {

Meteor.startup(function () {

    if (Players.find().count() === 0) {
      
      var names = [
                    "TJ Houston",
                   "Ashley Clark", 
                   "Mike Clark", 
                   "Corbin Clark"
                   
                  ];

      for (var i = 0; i < names.length; i++)
        Players.insert({name: names[i][0], score: names[i][1]});
    }
  });
}
