import { useState } from "react";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const simulatedResponse = {
    answer:
      "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
    citations: [
      {
        text:
          "As the age of the deceased at the time of accident was held to be about 54–55 years...",
        source: "Dani Vs Pritam (Future 10 at age 54-55).pdf",
        link: "/Dani Vs Pritam (Future 10 at age 54-55).pdf#page=1",
        paragraph:
          "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
      },
    ],
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse(simulatedResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <h1>Lexi Legal Assistant</h1>

      <textarea
        rows={4}
        placeholder="Ask a legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={loading || !query.trim()}>
        {loading ? "Generating..." : "Submit"}
      </button>

      {response && (
        <div className="card">
          <h2>Answer</h2>
          <p>{response.answer}</p>

          <h2 style={{ marginTop: "20px" }}>Citation</h2>
          <a href={response.citations[0].link} target="_blank" rel="noopener noreferrer">
            {response.citations[0].text} ({response.citations[0].source})
          </a>

          <div className="highlight">
            <strong>Highlighted Paragraph:</strong>
            <p>{response.citations[0].paragraph}</p>
          </div>
        </div>
      )}
    </div>
  );
}
