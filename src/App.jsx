import { useEffect, useState } from "react";
import QuoteCard from "../components/QuoteCard";
import SavedQuotes from "../components/savedQuotes";
import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes "
    );
    const data = await response.json();
    setQuotes(data[0]);
  };

  const saveQuotes = () => {
    setSavedQuotes([...savedQuotes, quotes]);
  };

  return (
    <div>
      <QuoteCard
        quotes={quotes}
        fetchQuote={fetchQuote}
        saveQuotes={saveQuotes}
      />
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;
