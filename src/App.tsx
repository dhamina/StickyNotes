import { useRef, useState } from "react";
import "./App.css";
import { StickyNote } from "./components/StickyNote/StickyNote";

export default function App() {
  const [notes, setNotes] = useState([{ id: 0 }]);
  const binRef = useRef(null);

  function addNote() {
    setNotes([
      ...notes,
      {
        id: Date.now(),
      },
    ]);
  }
  function removeNote(noteId: any) {
    setNotes(notes.filter((item) => item.id !== noteId));
  }
  return (
    <div className="App">
      <button className="sticky-btn" onClick={addNote}>
        Add Note
      </button>
      {notes.map((item) => (
        <StickyNote key={item.id} onClose={() => removeNote(item.id)} />
      ))}
      <div ref={binRef} id="bin" className="trash__cn">
        <img alt="trash" src={"/trash.svg"} />
      </div>
    </div>
  );
}
