import React from "react";
import { Document } from "react-pdf";
import pdf from "../assets/Ardalan Al-Jaf - Resume.pdf";

function Resume() {
  //   return <Document file={{ URL: "../assets/ArdalanAl-JafResume.pdf" }} />;
  //   return (
  //     <object
  //       data="../assets/ArdalanAl-JafResume.pdf"
  //       type="aplication/pdf"
  //       width="100vw"
  //       height="100vh"
  //     >
  //       <a href="../assets/ArdalanAl-JafResume.pdf">pdf!</a>
  //     </object>
  //   );

  return (
    <div>
      <a href={pdf} target="_blank" rel="noreferrer">
        Download Pdf
      </a>
    </div>
  );
}

export default Resume;
