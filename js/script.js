// FSJS - Random Quote Generator
//array of colors to change background
var colors = [
    "pink", "green", "red", "blue","black","magenta"
]
// Create the array of quote objects and name it quotes
//object contains quote, source & tag properties
var quotes = [
    {quote:"Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    source:"Malcolm X", tags:["#Education", "#Knowldege", "#History"]},
   {quote:"I believe in human beings, and that all human beings should be respected as such, regardless of their color.",
    source:"Malcolm X",tags:["#Equality", "#Humanity", "#Love"]},
    {quote:"My alma mater was books, a good library.... I could spend the rest of my life reading, just satisfying my curiosity",
    source:"Malcolm X"},
    {quote:"For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.",
    source:"Carl Sagan", tags:["#Astronomy", "#Science","#Big Facts"]},
    {quote:"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
    source:"Carl Sagan"},
    {quote:"Somewhere, something incredible is waiting to be known.",
    source:"Carl Sagan"},
    {quote:"Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
    source:"Viktor Frankl"},
   {quote:"Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way.",
    source:"Viktor Frankl"},
    {quote:"When we are no longer able to change a situation, we are challenged to change ourselves.",
    source:"Viktor Frankl"},
    {quote:"I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time, like tears in rain...",
    source:"Roy Batty"}
 
 ];

// Create the getRandomQuuote function and name it getRandomQuote

function getRandomColor(array) {
    //create and store a random number
    var rand = Math.floor(Math.random() * array.length);
    //use number to randomly select color from array
    var randColor = array[rand];
    document.getElementById('loadQuote').style.background = randColor;
    document.getElementById('quote-box').style.background = randColor;
    document.body.style.background = randColor;
    console.log(randColor);
};

//pick a random number and use it to select a random quote
//I could have created one random number function and called it in these functions to get random quotes and colors but wanted to adhere to guidelines
function getRandomQuote(array){
    var rando = Math.floor(Math.random() * array.length);
    var randomQuote = array[rando];
    return randomQuote; 
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
    //call randomquote and store the returned quote in a variable 
    getRandomColor(colors);
    var randomQuote = getRandomQuote(quotes);
if(randomQuote.hasOwnProperty('tags')){
    var tags = "";
    for(var i=0; i < randomQuote.tags.length; i++){
        tags+= '<p class="tags">' + randomQuote.tags[i] + '</p>';
    };


    document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '</p>' + tags;

}else {
    document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '</p>';
}
};
//refresh page every 5 seconds 
setInterval(printQuote, 9000);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);