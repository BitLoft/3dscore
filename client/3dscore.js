Players = new Meteor.Collection("players");

if (Meteor.is_client) {
  Template.leaderboard.players = function () {
    return Players.find({}, {sort: {score: -1, name: 1}});
  };

  Template.leaderboard.selected_name = function () {
    var player = Players.findOne(Session.get("selected_players"));
    return player && player.name;
  };

  Template.player.selected = function () {
    return Session.equals("selected_players", this._id) ? "selected" : '';
  };

  Template.leaderboard.events = {
    'click input.inc': function () {
      Players.update(Session.get("selected_players"), {$inc: {score: 5}});
    }
  };

  Template.player.events = {
    'click': function () {
      Session.set("selected_players", this._id);
    }
  };
}


Template.scoreButtons.events(
  {       
      'click #5points':function(e){
      alert('5 Points');
      },
      'click #8points':function(e){
      alert('8 Points');
      },
      'click #10points':function(e){
      alert('10 Points');
      },

})