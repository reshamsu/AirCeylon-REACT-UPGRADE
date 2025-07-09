const events = [
  { title: "Brand Founded", month: "July", year: "2024" },
  { title: "Founding Management Established", month: "October", year: "2024" },
  { title: "Brand Launch", month: "January", year: "2025" },
  { title: "Company Registration", month: "January", year: "2025" },
  { title: "EPT Academy Open", month: "January", year: "2025" },
  { title: "EPT Brand Partnership", month: "January", year: "2025" },
  { title: "Office Open", month: "March", year: "2025" },
  { title: "Team Air Ceylon Established", month: "March", year: "2025" },
  { title: "Transition Support Open", month: "March", year: "2025" },
  { title: "Notarization Open", month: "April", year: "2025" },
  { title: "VISA Service Open", month: "May", year: "2025" },
];

const groupedEvents = events.reduce((acc, event) => {
  const key = event.month ? `${event.month} ${event.year}` : event.year;
  if (!acc[key]) acc[key] = [];
  acc[key].push(event.title);
  return acc;
}, {});

function Timeline() {
  const entries = Object.entries(groupedEvents);

  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      <div className="timeline-wrapper">
        {entries.map(([period, titles], index) => (
          <div
            key={period}
            className={`timeline-block ${index % 2 === 0 ? "top" : "bottom"}`}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{period}</h3>
              <ul>
                {titles.map((title, i) => (
                  <li key={i}>{title}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
