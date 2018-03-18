$(document).ready(function(){
 $('.btn').on('click', function(){
	var rng = Math.floor(Math.random()*quotes.length);
	$('.quote').html('<h1>"' + quotes[rng][0] + '"</h1>');
	$('.name').html('<p> -' + quotes[rng][1] + '</p>');
});
	
var quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
  ];

}); 
