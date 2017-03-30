

var CardView = Backbone.View.extend({

//  className: 'card',

  template: Handlebars.compile($('#card-template').html()),

  events: {
    'click': 'markAsDone',
//    'click span('.delete-action')': 'changeBackgroundColor'
  },

  render: function(){
    var html = this.template(this.model);
    this.$el.html(html);
  },

  // markAsDone: function(){
  //   this.$el.find('p').css('text-decoration', 'line-through');
  // },
  //
  // changeBackgroundColor: function(){
  //   this.$el.find('h2').css('background-color', 'mistyrose');
  // }

})


$.ajax({
  url: 'http://localhost:3000/api/cards'

}).done(function(cards){
  cards.forEach(function(card){
  var view = new CardView({model: card});
  view.render();
  $('.wrapper').append(view.el);  //attaches the root element

  });
});
