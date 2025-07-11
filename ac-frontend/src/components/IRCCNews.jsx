import React, { useEffect, useState } from "react";
import { fetchIRCCNews } from "../components/utils/fetchIRCCNews";

const IRCCNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIRCCNews().then((items) => {
      setArticles(items);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-4 bg-transparent rounded-xl">
      <h2 className="text-xl font-bold text-gray-700 mb-4">IRCC Immigration News</h2>
      {loading ? (
        <p className="text-gray-500">Loading latest updates...</p>
      ) : articles.length === 0 ? (
        <p className="text-red-500">Failed! No news available at the moment.</p>
      ) : (
        <ul className="space-y-3 list-disc list-inside">
          {articles.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                {item.title}
              </a>
              <p className="text-sm text-gray-500">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IRCCNews;
