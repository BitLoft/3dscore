if (Meteor.is_server) {

Meteor.startup(function () {

    if (Players.find().count() === 0) {
      
      var names = [
                    ["TJ Houston", 100],
                   ["Ashley Clark", 90],
                   ["Mike Clark", 80],
                   ["Corbin Clark", 70]
                   
                  ];

      for (var i = 0; i < names.length; i++)
        Players.insert({name: names[i][0], score: names[i][1]});
    }
  });
}
