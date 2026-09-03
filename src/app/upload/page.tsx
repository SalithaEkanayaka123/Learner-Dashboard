"use client";

import { ChangeEvent, DragEvent, useState } from "react";

export default function UploadSource() {
  const [fileName, setFileName] = useState("");

  const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.files?.[0]?.name ?? "");
  };

  const dropFile = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setFileName(event.dataTransfer.files?.[0]?.name ?? "");
  };

  return (
    <main className="dashboard-shell upload-shell">
      <nav className="dashboard-nav"><a className="wordmark" href="/"><span className="wordmark-mark">L</span> luma</a><div className="dashboard-nav-links"><a href="/dashboard">Overview</a><a className="active" href="/upload">My sources</a><a href="/dashboard#progress">Progress</a></div><div className="profile-chip"><span>AM</span><strong>Alex Morgan</strong><small>Student</small></div></nav>
      <section className="upload-content">
        <a className="back-link" href="/dashboard">&lt;- Back to overview</a>
        <div className="upload-heading"><p className="eyebrow"><span className="eyebrow-dot" /> Build your knowledge base</p><h1>Add a new source.</h1><p>Upload the materials you want Luma to use for sharper, more personal assessments.</p></div>
        <div className="upload-layout">
          <div className="upload-form-panel">
            <label className="upload-label" htmlFor="source-title">Source name</label><input className="source-title-input" id="source-title" type="text" placeholder="e.g. Biology lecture notes" />
            <label className="drop-zone" htmlFor="source-file" onDragOver={(event) => event.preventDefault()} onDrop={dropFile}><input id="source-file" type="file" accept=".pdf,.txt,.doc,.docx,.ppt,.pptx" onChange={selectFile} /><span className="upload-icon">&#8593;</span><strong>{fileName || "Drop your file here"}</strong><span>{fileName ? "Ready to register" : "or click to browse from your computer"}</span><small>PDF, DOCX, PPTX, or TXT up to 25 MB</small></label>
            {fileName && <div className="selected-file"><span className="source-icon pdf">FILE</span><span>{fileName}</span><button type="button" onClick={() => setFileName("")} aria-label="Remove selected file">&#10005;</button></div>}
            <button className="button button-primary upload-submit" type="button" disabled={!fileName}>Register source <span aria-hidden="true">-&gt;</span></button>
          </div>
          <aside className="upload-aside"><span className="aside-mark">&#10022;</span><h2>What happens next?</h2><ol><li><b>01</b><span>We read and structure your material.</span></li><li><b>02</b><span>Luma maps topics and key concepts.</span></li><li><b>03</b><span>Your source becomes ready for assessment.</span></li></ol></aside>
        </div>
      </section>
    </main>
  );
}