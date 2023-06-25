import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import React, { forwardRef, useState } from "react";

const Draft = forwardRef(
  ({ editorState, setEditorState, stripStyles, setContent }, ref) => {
    const onEditorTextChange = async (e) => {
      const blocks = convertToRaw(e.getCurrentContent()).blocks;
      const value = blocks
        .map((block) => (!block.text.trim() && "\n") || block.text)
        .join("\n");
      const contentLength = e.getCurrentContent().getPlainText("").length;
      // getContent(value);
      setContent(value);
      setEditorState(e);
      if (contentLength === 0) {
        setEditorState((editorState) =>
          RichUtils.toggleBlockType(editorState, "paragraph")
        ); // Reset the editor to default state
      }
    };
    return (
      <Editor
        ref={ref}
        stripPastedStyles={stripStyles}
        editorState={editorState}
        onChange={onEditorTextChange}
      />
    );
  }
);

export default Draft;
