
var $searchTerm;
var $limit;


var makeAJAXCall = function (){
$offset = $limit - 10;
$.ajax({
  method: 'GET',
  url: 'http://api.giphy.com/v1/gifs/search?q=' + $searchTerm + '&api_key=dc6zaTOxFJmzC&limit=1&offset=' + $offset + '&limit=' + $limit,
 }).done(function(result){

  $images = result;

  for(i=$limit-10; i< $limit; i++){

    if ($images.data[i].images.fixed_height_downsampled.url){
      $('<img>').attr("src", $images.data[i].images.fixed_height_downsampled.url).appendTo(".canvas");
     }

   }

   $limit += 10;

 });

}




$(".search-btn").click(function(event){

  event.preventDefault();

  $input = $('.text_input').val();
  $searchTerm = $input.split(" ").join('+');
  $limit = 10;
  $(".canvas").empty();
//  $( "img" ).remove();
//  $(".canvas").remove('img');

  makeAJAXCall();

});



$(window).scroll(function() {
 if($(window).scrollTop() + $(window).height() == $(document).height()) {

   makeAJAXCall();

  }
});
