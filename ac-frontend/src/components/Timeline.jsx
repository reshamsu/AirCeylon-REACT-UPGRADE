import React from "react";

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
  const key = `${event.month} ${event.year}`;
  if (!acc[key]) acc[key] = [];
  acc[key].push(event.title);
  return acc;
}, {});

const Timeline = () => {
  const entries = Object.entries(groupedEvents);

  return (
    <div className="relative bg-transparent py-12 px-4">
      <div className="relative border-l-4 border-[#a87c47] pl-6 max-w-4xl mx-auto space-y-10 rounded-xl">
        {entries.map(([period, titles], index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 top-1.5 w-6 h-6 bg-[#a87c47] rounded-full border-4 border-white shadow-md" />
            <div className="bg-[#fefcf9] shadow-md rounded-xl px-6 py-6">
              <h3 className="text-xl font-semibold text-[#a87c47] mb-2">
                {period}
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
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
};

export default Timeline;
