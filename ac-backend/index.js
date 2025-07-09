import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());

let cachedNews = null;
let lastFetched = 0;
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

function filterImmigrationNews(items) {
  return items.filter((item) =>
    /ircc|immigration|visa|canada immigration/i.test(
      (item.title || "") + " " + (item.description || "")
    )
  );
}

app.get("/api/ircc-news", async (req, res) => {
  try {
    const now = Date.now();
    if (cachedNews && now - lastFetched < CACHE_DURATION) {
      return res.json(cachedNews);
    }

    const rssUrl = encodeURIComponent(
      "https://news.canada.ca/api/english/rss.xml"
    );
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch IRCC news" });
    }

    const data = await response.json();

    const filteredNews = filterImmigrationNews(data.items || []);

    cachedNews = filteredNews;
    lastFetched = now;

    res.json(filteredNews);
  } catch (error) {
    console.error("Error fetching IRCC news:", error);
    res.status(500).json({ error: "Failed to fetch IRCC news" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ IRCC News API running at http://localhost:${PORT}/api/ircc-news`);
});
