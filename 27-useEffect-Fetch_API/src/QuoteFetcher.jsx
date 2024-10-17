const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
/*
{
  "quote": {
    "text": "If you can dream it, you can do it.",
    "author": "Walt Disney"
  }
}
*/

export default function QuoteFetcher(){
    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        console.log(randomQuote);
    }

    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
        </div>
    )
}