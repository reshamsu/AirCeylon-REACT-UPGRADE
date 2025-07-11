// src/utils/fetchIRCCNews.js
export async function fetchIRCCNews() {
  const URL = "https://api.io.canada.ca/io-server/gc/news/en/v2?dept=departmentofcitizenshipandimmigration&sort=publishedDate&orderBy=desc&format=atom";
  const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(URL)}`;
  const res = await fetch(proxy);
  const data = await res.json();
  const xml = new DOMParser().parseFromString(data.contents, "application/xml");
  return Array.from(xml.querySelectorAll("entry"))
    .map(e => ({
      title: e.querySelector("title")?.textContent,
      link: e.querySelector("link")?.getAttribute("href"),
      date: e.querySelector("updated")?.textContent
    }))
    .slice(0, 5);
}
