import { useEffect, useRef, useState } from "react";
import "./App.css";
import { StickyNote } from "./components/StickyNote/StickyNote";

export default function App() {
  const [notes, setNotes] = useState<Array<{ id: number; desc: string }>>([]);
  const binRef = useRef<HTMLInputElement>(null);

  //function to add new Note
  function addNote() {
    setNotes([
      ...notes,
      {
        id: Date.now(),
        desc: "",
      },
    ]);
  }

  //function to remove notes
  function removeNote({ noteId }: { noteId: any }): void {
    setNotes(notes.filter((item:any) => item.id !== noteId));
    notes.length===0 && localStorage.removeItem("notesList");

    //if last note is tried to be removed removing description
    if(notes.length===1){
      setNotes( [{
        id: Date.now(),
        desc: "",
      }])
    }
  }

  //text change function fo rnotes
  function onTextChange(e: any, id: number): void {
    setNotes(
      notes.map((item:any) =>
        item.id === id ? { ...item, desc: e.target.value } : item
      )
    );
   
  }

  //Async function calling Post to send notes
  async function onSaveToCloud (){
    const rawResponse = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(notes)
    });
    const response = await rawResponse.json();
    response ? alert('Notes Saved Successfully!') :alert('Notes was not Saved Successfully!')
  }

  // getting Notes from localStorage
  useEffect(() => {
    const list = localStorage.getItem("notesList");
    const itemsList = list ? JSON.parse(list) : [];
    setNotes(itemsList);
  }, []);

  //Storing Notes to LocalStorage
  useEffect(() => {
    notes.length!==0 && localStorage.setItem("notesList", JSON.stringify(notes));
  }, [notes]);


  return (
    <div className="App">
      {notes&& notes.map((item:any,index:number) => (
        <StickyNote
          note={item}
          onTextChange={onTextChange}
          key={item.id}
          index={index}
          onAddNote={addNote}
          onUpload={onSaveToCloud}
          onClose={() => removeNote({ noteId: item.id })}
        />
      ))}
      <div ref={binRef} id="bin" className="trash__cn">
        <img alt="trash" src={"/trash.svg"} />
      </div>
    </div>
  );
}
