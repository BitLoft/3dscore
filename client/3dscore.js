
if (Meteor.isclient) {
  Template.leaderboard.players = function () {
    return Players.find({}, {sort: {score: -1, name: 1}});
  };

  Template.leaderboard.selected_name = function () {
    var player = Players.findOne(Session.get("selected_player"));
    return player && player.name;
  };

  Template.player.selected = function () {
    return Session.equals("selected_player", this._id) ? "selected" : '';
  };

  Template.leaderboard.events = {
    'click input.inc': function () {
      Players.update(Session.get("selected_player"), {$inc: {score: 5}});
    }
  };

  Template.player.events = {
    'click': function () {
      Session.set("selected_player", this._id);
    }
  };
}
Template.new_player.events = {
  'click input.add': function () {
    var new_player_name = document.getElementById("new_player_name").value;
    alert(new_player_name);
    Players.insert({name: new_player_name, score: 0});

  }
};

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