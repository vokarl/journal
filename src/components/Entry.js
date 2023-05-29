import { useState } from "react";
import EnterList from "./EnterList";

function JournalEntry() {
  const [journals, setJournals] = useState([
    { date: "999", title: "Lorem", entry: "loremloremlorem", id: 1 },
    { date: "99", title: "Lorem", entry: "loremloremlorem", id: 2 },
    { date: "9", title: "Lorem", entry: "loremloremlorem", id: 3 },
  ]);

  return (
    <div className="list">
      <EnterList journals={journals} />
    </div>
  );
}

export default JournalEntry;
