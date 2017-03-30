

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
  url: '/api/cards'

}).done(function(cards){
  cards.forEach(function(card){
  var view = new CardView({model: card});
  view.render();
  $('.wrapper').append(view.el);  //attaches the root element

  });
});
















//
//
//
// $(document).ready(function(){
//
//   $('.wrapper').on('click', '.new-card-action', function(event){
//     event.preventDefault();
//
//     // var data = JSON.stringify( $('.new-card-form').serializeArray() ); //  <-----------
//     // console.log(data);
//
//     $.ajax({
//       url: '/api/cards',
//       method: 'post',
//       data: {
//         name: $('.new-card-name').val(),
//         image_url: $('.new-card-image_url').val()
//       }
//     }).done(function(card){
//
//       var source = $('#card-template').html(); //grab the template string
//       var templateFunction = Handlebars.compile(source); //turn into template string into a function
//       var html = templateFunction(card); //html with template & data merged together
//
//       $( html ).insertBefore($(".new-card-form"));
// //      $('.wrapper').append(html);
//
//
//     });
//
//   });
//
//
//   $.ajax({
//     url: 'api/cards'
//   }).done(function(result){
//
//     var shuffledCards = _.shuffle(result);
//
//     shuffledCards.forEach(function(card){
//
//       var source = $('#card-template').html(); //grab the template string
//       var templateFunction = Handlebars.compile(source); //turn into template string into a function
//       var html = templateFunction(card); //html with template & data merged together
//       $('.wrapper').append(html);
//     })
//     var source = $('#new-form-template').html(); //grab the template string
//     var templateFunction = Handlebars.compile(source); //turn into template string into a function
//     var html = templateFunction(); //html with template & data merged together
//     $('.wrapper').append(html);
//
//   });
//
//   //console.log('moving on'); //will be displayed before cards loaded
//
//
// // instead of listening on .delete-action, we're listening on the parent
// // and filtering down to the child
//   $('.wrapper').on('click', '.delete-action', function(event){
//
//     var id = $(event.target).closest('.card').data('id');
//
//     $.ajax({
//       url: 'api/cards/' + id,
//       method: 'DELETE'
//
//     }).done(function(){
//       $(event.target).closest('.card').fadeOut(500, function(){
//         $(event.target).closest('.card').remove();
//       })
//     });
//
//   });
//
//
//
//
//
//
//   $('.wrapper').on('click', '.edit-action', function(event){
//
//     var id = $(event.target).closest('.card').data('id');
//
//
//     $.ajax({
//       url: 'api/cards/' + id +'/edit',
//       method: 'GET'
//
//     }).done(function(card){
//
//     $( ".wrapper" ).empty();
//       // remove all cards
//       var source = $('#edit-form-template').html(); //grab the template string
//       var templateFunction = Handlebars.compile(source); //turn into template string into a function
//       var html = templateFunction(card); //html with template & data merged together
//       $('.wrapper').append(html);
//
//     });
//
//   });
//
//
//
//
//
//   $('.wrapper').on('click', '.edit-form-action', function(event){
//
//     event.preventDefault();
//
//     debugger;
//
//     var id = $('.edit-card-id').val();
//
//     $.ajax({
//       url: 'api/cards/' + id,
//       method: 'PUT',
//       data: {
//         id: $('.edit-card-id').val(),
//         name: $('.edit-card-name').val(),
//         image_url: $('.edit-card-image_url').val()
//       }
//
//     }).done(function(result){
//
//       $( ".wrapper" ).empty();
//
//       var shuffledCards = _.shuffle(result);
//
//       shuffledCards.forEach(function(card){
//
//       var source = $('#card-template').html(); //grab the template string
//       var templateFunction = Handlebars.compile(source); //turn into template string into a function
//       var html = templateFunction(card); //html with template & data merged together
//       $('.wrapper').append(html);
//         // $('.wrapper').append($card);
//       });
//       var source = $('#new-form-template').html(); //grab the template string
//       var templateFunction = Handlebars.compile(source); //turn into template string into a function
//       var html = templateFunction(); //html with template & data merged together
//       $('.wrapper').append(html);
//
//     });
//
//   });
//
//
//
//
//
//
// });
