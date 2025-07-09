import React, { useEffect, useState } from "react";

export default function IRCCNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/ircc-news")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading IRCC news...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <h2>IRCC Immigration News</h2>
      {news.length === 0 && <p>No news available at the moment.</p>}
      <ul>
        {news.map((item, idx) => (
          <li key={idx}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <br />
            <small>{new Date(item.pubDate).toLocaleDateString()}</small>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </li>
        ))}
      </ul>
    </section>
  );
}
