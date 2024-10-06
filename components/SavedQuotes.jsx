import React from "react";

const SavedQuotes = ({ savedQuotes }) => {
  return (
    <div className="saved-quotes">
      <h2>SavedQuotes</h2>
      <ul>
        {savedQuotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavedQuotes;
