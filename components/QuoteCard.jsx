const QuoteCard = ({ quotes, saveQuotes, fetchQuote }) => {
  return (
    <div className="card">
      <p>{quotes}</p>
      <button className="btn" onClick={fetchQuote}>
        New Quote
      </button>
      <button className="btn" onClick={saveQuotes}>
        Save Quote
      </button>
    </div>
  );
};

export default QuoteCard;
