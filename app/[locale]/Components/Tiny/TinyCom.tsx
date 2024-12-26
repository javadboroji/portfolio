"use client";
import React, { useState } from "react";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export interface ITinyCom {
  newPost?: string;
  setNewPost?: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

const TinyCom: React.FC<ITinyCom> = () => {
  const [newPost, setNewPost] = useState("");
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const changeContentValue = (content: string) => {
    setNewPost(content);
  };
  return (
    <div className="w-full">
      <Editor
        apiKey="wsntphmr8e2ki1sfhg8mr9pojwmpng64egw5t57af1uk4jdc"
        onInit={(_evt, editor) => {
          if (editorRef.current) {
            editorRef.current = editor;
          }
        }}
        onChange={(event) => changeContentValue(event.target.getContent())}
        init={{
          height: 500,
          language: "fa",
          language_url: "../langs/fa.js",
          directionality: "rtl",
          menubar: false,
          plugins:
            "  searchreplace autolink directionality  visualblocks visualchars image link media  codesample table charmap pagebreak nonbreaking anchor  insertdatetime advlist lists  wordcount   help     charmap  linkchecker emoticons   print autosave",
          toolbar:
            "undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat",
          toolbar_sticky: true,
          icons: "thin",
        }}
      />
      
    </div>
  );
};

export default TinyCom;
