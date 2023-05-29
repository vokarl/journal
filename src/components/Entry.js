import { useState } from "react";

function JournalEntry() {
  const [journals, setJournals] = useState([
    { date: "999", title: "Lorem", entry: "Lorem", id: {} },
    { date: "999", title: "Lorem", entry: "Lorem", id: {} },
    { date: "999", title: "Lorem", entry: "Lorem", id: {} },
  ]);

  return <div className="entry"></div>;
}

export default JournalEntry;
