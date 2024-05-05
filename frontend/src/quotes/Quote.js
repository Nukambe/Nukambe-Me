import "./Quote.css";

export default function Quote({ quote }) {
  return (
    <div className="quote-container">
      <blockquote>
        {quote.text} – {quote.author}
      </blockquote>
    </div>
  );
}
