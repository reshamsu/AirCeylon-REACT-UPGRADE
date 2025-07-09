const FEED_URL = "https://www.canada.ca/content/canadasite/en/news/web-feeds/news-releases.xml";

export async function fetchIRCCNews() {
  try {
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(FEED_URL)}`;
    const response = await fetch(proxyUrl);
    const result = await response.json();

    const parser = new DOMParser();
    const xml = parser.parseFromString(result.contents, "text/xml");

    const items = Array.from(xml.querySelectorAll("item"))
      .filter((item) => {
        const title = item.querySelector("title")?.textContent?.toLowerCase() || "";
        return title.includes("immigration") || title.includes("ircc");
      })
      .slice(0, 5)
      .map((item) => ({
        title: item.querySelector("title")?.textContent,
        link: item.querySelector("link")?.textContent,
        pubDate: item.querySelector("pubDate")?.textContent,
      }));

    return items;
  } catch (err) {
    console.error("Failed to fetch IRCC news:", err);
    return [];
  }
}
