// Stored a list of quotes in an array
const codingQuotes = [
    {
        quote: "Talk is cheap. Show me the code.",
    },
    {
        quote: "First, solve the problem. Then, write the code.",
    },
    {
        quote: "Experience is the name everyone gives to their mistakes.",
    },
    {
        quote: "In order to be irreplaceable, one must always be different.",
    }
]

// Function to get a random quote from the array
const getRandomQuote = () => {
    const randomQuote = Math.floor(Math.random() * codingQuotes.length)
    return codingQuotes[randomQuote].quote
}

// Function to print the quote to the console
console.log(getRandomQuote())