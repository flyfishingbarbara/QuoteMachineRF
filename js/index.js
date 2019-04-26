$(document).ready(function(){
  
   
  var randomNum;
  var randomQuote;
  var randomAuthor;
  getQuote();
          function getQuote(){          
            
var quotes = ["If you were to pick one thing which I was jealous about it would be his absolute love and joy to be out there playing",
"I can cry like Roger, it's just a shame I can't play like him.",
"For me Roger is the greatest player ever who played the tennis game.",  
"I’d like to be in his shoes for one day to know what it feels like to play that way.",
"Roger can produce tennis shots that should be declared illegal.",
"The guy is the greatest male athlete of all time.", 
"It's amazing what sort of shots he can come up with from impossible  positions.",
"He moves like a whisper and executes like a wrecking ball.",
"He’s a class guy on and off the court. He’s fun to watch.",
"He simply does not have any more weaknesses left in him. It is such a pleasure to see him play.",
"Roger is like a good red wine, he’s getting better with age. I think his best years are ahead of him."];

var author =["-John McEnroe", "-Andy Murray", "-Bjorn Borg", "-Mats Wilander", "-Tracy Austin", "-Serena Williams", "-Rod Laver", "-Nick Boll", "-Pete Sampras", "-Bjorn Borg", "-Tony  Roche"];
                 
  randomNum = Math.floor((Math.random()* quotes.length));
  randomQuote = quotes[randomNum];
  randomAuthor = author[randomNum];
            
                   $(".quote").text('"' + randomQuote + '"');
                   $(".author").text(randomAuthor);
                 }
  
  $("#tennisBall").addClass("animated bounce infinite");
 
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + '"'+randomQuote+'"' + " " + randomAuthor);
  });
   $("#newQuote").on("click", function(){
    getQuote();
     
     
   });
  
 
   });