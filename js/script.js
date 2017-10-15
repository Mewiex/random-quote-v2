// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var red,green,blue;
var quotesViewed = [];
//Array holding quotes and its values, quote, source and other things
var quotes = [
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: "Dr. Seuss",
        citation: "",
        year: "",
        tags:"Classic"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        citation: "",
        year: 1976,
        tags:"Science"
    },
     {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde",
        citation: "",
        year: 1994,
         tags:"Inspirational"
    },
    {
        quote: "So many books, so little time.",
        source: "Frank Zappa",
        citation: "",
        year: "",
        tags:"Life"
    },
    {
        quote: "A room without books is like a body without a soul.",
        source: "Marcus Tullius Cicero",
        citation: "",
        year: "",
        tags:"Happy"
    }
    
    
];

//generates a random color and returns the new color values
function RandomColorGenerator()
{
    var randomcolor;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomcolor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return randomcolor;
}
//Setting an interval to "refresh" the quote every 30 seconds
var intervalID = window.setInterval(printQuote,30000);
//selects a random quote from the quotes array and  returns the randomly selected quote
function getRandomQuote() {
    var randomquote = Math.floor(Math.random() * quotes.length);
    var newQuote = quotes.splice(randomquote, 1)[0];
    quotesViewed.push(newQuote);
    
    if(quotes.length === 0)
        {
            quotes = quotesViewed;
            quotesViewed = [];
        }
    
    return newQuote;
}

//runs the function printQuote which randomly chooses a quote with its values to display on the page
function printQuote() {
    var myQuotes = getRandomQuote();
    var message;
    message = '<p class="quote">' + myQuotes.quote + '</p>';
    message += '<p class="source">' + myQuotes.source;
    
   
    if(myQuotes.citation !== "")
        {
             message += '<span class="citation">' + myQuotes.citation; + '</span>'
         
        }
    if(myQuotes.year !== "")
        {
            message += '<span class="year">' + myQuotes.year + '</span>'
             
        }
    message += '<p>' + myQuotes.tags + '</p>';
    //runs the function to randomly generate a new color to use as new background color
    RandomColorGenerator();
    
    document.getElementById('quote-box').innerHTML = message;
   //updates current Backgoundcolor with the newly generated one 
    document.getElementById('Bcolor').style.backgroundColor=RandomColorGenerator();
   
}


