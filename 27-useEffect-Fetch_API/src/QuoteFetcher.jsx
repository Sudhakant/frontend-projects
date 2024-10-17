import { useState } from "react";

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
    const [quote, setQuote] = useState({});

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        // console.log(randomQuote);
        setQuote(randomQuote);
    }

    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}