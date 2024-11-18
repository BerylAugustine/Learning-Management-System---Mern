import { Collapse } from "antd";
import NotesEditor from "./NotesEditor";
import { useEffect, useState } from "react";
const { Panel } = Collapse;

const NotesCollapsible = ({ notesFromParent }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(notesFromParent);
  });

  return (
    <Collapse accordion>
      {notes.map((note) => (
        <Panel
          header={note.session_id + " : " + note.notes_title}
          key={note.session_id + " : " + note.notes_title}
        >
          <NotesEditor notes={note} />
        </Panel>
      ))}
    </Collapse>
  );
};
export default NotesCollapsible;
