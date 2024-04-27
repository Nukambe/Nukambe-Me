import "./Quote.css"

export type QuoteType = {
  text: string
  author: string
}

export default function Quote({ quote }: { quote: QuoteType }) {
  return (
    <div className="quote-container">
      <blockquote>
        {quote.text} – {quote.author}
      </blockquote>
    </div>
  )
}
