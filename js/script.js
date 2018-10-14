// FSJS - Random Quote Generator
//array of colors to change background
var colors = [
	"pink", "green", "red", "blue", "black", "magenta"
]
// Create the array of quote objects and name it quotes
//object contains quote, source & tag properties
var quotes = [

    {quote:"If you are bad at something that doesnt mean you are bad it. Put efforts and prove that you are good at it",
    source:"Girish"},
    {quote:"Working hard for something we don't care about is called stress: Working hard for something we love is called passion.",
    source:"Simon Sinek"},
    {quote:"We become what we think about",
    source:"Earl Nightingale"},
	{
		quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
		source: "Malcolm X",
		tags: [
			"#Education",
			"#Knowldege",
			"#History"
		]
	},
	{
		quote: "I believe in human beings, and that all human beings should be respected as such, regardless of their color.",
		source: "Malcolm X",
		tags: [
			"#Equality",
			"#Humanity",
			"#Love"
		]
	},
	{
		quote: "My alma mater was books, a good library.... I could spend the rest of my life reading, just satisfying my curiosity",
		source: "Malcolm X"
	},
	{
		quote: "For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.",
		source: "Carl Sagan",
		tags: [
			"#Astronomy",
			"#Science",
			"#Big Facts"
		]
	},
	{
		quote: "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
		source: "Carl Sagan"
	},
	{
		quote: "Somewhere, something incredible is waiting to be known.",
		source: "Carl Sagan"
	},
	{
		quote: "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
		source: "Viktor Frankl"
	},
	{
		quote: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way.",
		source: "Viktor Frankl"
	},
	{
		quote: "When we are no longer able to change a situation, we are challenged to change ourselves.",
		source: "Viktor Frankl"
	},
	{
		quote: "Success is going from failure to failure without losing your enthusiasm.",
		source: "Winston Churchill",
		tags: [
			"#Success",
			"#Failure",
		]
	},
	{
		quote: "What you do speaks so loudly that I cannot hear what you say.",
		source: "Ralph Waldo Emerson"
	},
	{
		quote: "You must be the change you wish to see in the world.",
		source: "Mahatma Gandhi",
		tags: [
			"#Change",
			"#World",
		]
	},
	{
		quote: "Tough times never last, but tough people do.",
		source: "Dr. Robert Schuller"
	},
	{
		quote: "Keep your face to the sunshine and you can never see the shadow.",
		source: "Helen Keller"
	},
	{
		quote: "There is only one success: to be able to spend your life in your own way.",
		source: "Christopher Morley",
		tags: [
			"#Success",
		]
	},
	{
		quote: "The best dreams happen when you’re awake.",
		source: "Cherie Gilderbloom",
		tags: [
			"#Dream",
		]
	},
	{
		quote: "Believe and act as if it were impossible to fail.",
		source: "Charles Kettering ",
		tags: [
			"#Believe",
			"#Act",
		]
	},
	{
		quote: "Don’t count the days, make the days count.",
		source: "Muhammad Ali"
	},
	{
		quote: "The difference between ordinary and extraordinary is that little extra.",
		source: "Jimmy Johnson"
	},
	{
		quote: "Light tomorrow with today.",
		source: "Elizabeth Barrett Browning"
	},
	{
		quote: "It is never too late to be what you might have been.",
		source: "George Eliot"
	},
	{
		quote: "Do what you can, where you are, with what you have.",
		source: "Teddy Roosevelt"
	},
	{
		quote: "The road to Easy Street goes through the sewer.",
		source: "John Madden"
	},
	{
		quote: "The harder I work, the luckier I get.",
		source: "Gary Player",
		tags: [
			"#HardWork",
		]
	},
	{
		quote: "Someday is not a day of the week.",
		source: "Denise Brennan-Nelson"
	},
	{
		quote: "Choosing a goal and sticking to it changes everything.",
		source: "Scott Reed",
		tags: [
			"#Goal",
		]
	},
	{
		quote: "Don’t wish it were easier, wish you were better.",
		source: "Jim Rohn"
	},
	{
		quote: "You miss 100% of the shots you don’t take.",
		source: "Wayne Gretzky"
	},
	{
		quote: "Don't stop when you are tired. Stop when you're done!",
		source: "Marilyn Monroe"
	},
	{
		quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
		source: "Malcolm X",
		tags: ["#Education", "#Knowldege", "#History"]
	},
	{
		quote: "I believe in human beings, and that all human beings should be respected as such, regardless of their color.",
		source: "Malcolm X",
		tags: ["#Equality", "#Humanity", "#Love"]
	},
	{
		quote: "My alma mater was books, a good library.... I could spend the rest of my life reading, just satisfying my curiosity",
		source: "Malcolm X"
	},
	{
		quote: "For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.",
		source: "Carl Sagan",
		tags: ["#Astronomy", "#Science", "#Big Facts"]
	},
	{
		quote: "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
		source: "Carl Sagan"
	},
	{
		quote: "Somewhere, something incredible is waiting to be known.",
		source: "Carl Sagan"
	},
	{
		quote: "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
		source: "Viktor Frankl"
	},
	{
		quote: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way.",
		source: "Viktor Frankl"
	},
	{
		quote: "I would much rather have men ask why I have no statue than why I have one.",
		source: "Marcus Porcius Cato"
	},
	{
		quote: "It is better to live one day as a lion and die than to live a thousand as a sheep.",
		source: "Italian proverb"
	},
	{
		quote: "You must be the change you wish to see in the world.",
		source: "Mahatma Ghandi"
	},
	{
		quote: "Know thy self, know thy enemy. A thousand battles, a thousand victories.",
		source: "Sun Tzu"
	},
	{
		quote: "We will either find a way, or make one.",
		source: "Hannibal Barca"
	},
	{
		quote: "When we are no longer able to change a situation, we are challenged to change ourselves.",
		source: "Viktor Frankl"
	},
	{
		quote: "Changes and progress very rarely are gifts from above.  They come out of struggles from below",
		source: "Noam Chomsky"
	},

	{
		quote: "Differences of habit and language are nothing at all if our aims are identical and our hearts are open",
		source: "Harry Potter Movies"
	},

	{
		quote: "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time, like tears in rain...",
		source: "Roy Batty"
	},
	{
		quote: "Art is a summary of nature made by imagination.",
		source: "Eça de Queirós"
	},
	{
		quote: "Pretend inferiority and encourage his arrogance.",
		source: "Sun Tzu"
	}
,
	{
		quote: "I did not become a vegetarian for my health, I did it for the health of the chickens.",
		source: "Isaac Bashevis Singer"
	}

];

// Create the getRandomQuuote function and name it getRandomQuote

function getRandomColor(array)
{
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
function getRandomQuote(array)
{
	var rando = Math.floor(Math.random() * array.length);
	var randomQuote = array[rando];
	return randomQuote;
}


// Create the printQuote funtion and name it printQuote
function printQuote()
{
	//call randomquote and store the returned quote in a variable
	getRandomColor(colors);
	var randomQuote = getRandomQuote(quotes);
	if (randomQuote.hasOwnProperty('tags'))
	{
		var tags = "";
		for (var i = 0; i < randomQuote.tags.length; i++)
		{
			tags += '<p class="tags">' + randomQuote.tags[i] + '</p>';
		};


		document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '</p>' + tags;

	}
	else
	{
		document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '</p>';
	}
};
//refresh page every 5 seconds
setInterval(printQuote, 9000);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
