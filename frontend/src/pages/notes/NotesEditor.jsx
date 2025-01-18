import JoditEditor from "jodit-react";
import React, { useState, useRef, useMemo } from "react";
import { Button } from "antd";

const NotesEditor = ({ notes }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(
    notes.notes_content);

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: notes.notes_content || "Start typings...",
    }),
    [notes.notes_content]
  );
  const save = async () => {
    notes.notes_content = content;
    notes.user_id = localStorage.getItem("userName");
    notes.notes_id = Date.now();
    await fetch(`http://localhost:8001/api/notes/create`, {
      method: "POST",
      body: JSON.stringify({ ...notes }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("Saved");
  };

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
      />
      <div style={{ display: "flex", gap: "16px", margin: "10px" }}>
        <Button type="primary" onClick={() => save()}>
          Save
        </Button>
        <Button danger onClick={() => setContent("")}>
          clear
        </Button>
      </div>
    </>
  );
};
export default NotesEditor;
