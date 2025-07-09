import fetch from "node-fetch";

(async () => {
  try {
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.canada.ca%2Fen%2Fimmigration-refugees-citizenship%2Fnews%2Ffeeds.xml";
    const res = await fetch(url);
    const data = await res.json();
    console.log("Fetched data:", data.items ? data.items.length : "No items");
  } catch (e) {
    console.error("Fetch error:", e);
  }
})();
