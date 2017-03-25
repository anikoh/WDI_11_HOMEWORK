



 $(document).ready(function(){

  $(".search").click(function(){

    $title = $("input:text[name='movie_title']").val()
    console.log($title)
    $url = "http://omdbapi.com/?s=" + $title

    $.ajax({
      url: $url,
      method: "GET",

    }).done(function(result){

      var movies = result.Search;
      $( "li" ).remove();

      movies.forEach(function(movie){

        var $newLi = $("<li>")
        $("<img>").attr('src', movie.Poster).appendTo($newLi)
        $("<a />").attr("href", "http://www.imdb.com/title/" + movie.imdbID).attr("target", "_blank").text(movie.Title).appendTo($newLi)
        $newLi.appendTo("#list")
      });

    }).fail(function(){
      console.log('Noo!!!!!!!!');
    });
  });
 });



//
// $(document).ready(function(){
//   $(".search").click(function(){
//
//     var movie_title = $(".movie_title").val();
//     var url = "https://www.omdbapi.com/?s="+movie_title;
//     $.ajax({
//       url: url,
//       method: "GET",
//     }).done(function(displayed){
//
//       var searchArray = displayed.Search;
//
//       searchArray.forEach(function(movie){
//         var title = $("<h2>").text(movie.Title)
//
//         $("#list").append(title)
//       })
//
//     })
//   });
// });
