export default function Dashboard() {
  return (
    <main className="dashboard-shell">
      <nav className="dashboard-nav"><a className="wordmark" href="/"><span className="wordmark-mark">L</span> luma</a><div className="dashboard-nav-links"><a className="active" href="/dashboard">Overview</a><a href="#sources">My sources</a><a href="#progress">Progress</a></div><div className="profile-chip"><span>AM</span><strong>Alex Morgan</strong><small>Student</small></div></nav>
      <section className="dashboard-content">
        <div className="dashboard-heading"><div><p className="eyebrow"><span className="eyebrow-dot" /> Thursday, September 3</p><h1>Good morning, Alex.</h1><p>Let&apos;s turn a little focus into meaningful progress.</p></div><a className="button button-primary" href="#assessment">Start assessment <span aria-hidden="true">-&gt;</span></a></div>
        <div className="dashboard-grid">
          <section className="next-card" id="assessment"><div className="card-kicker">YOUR NEXT MOVE</div><div className="next-card-main"><div><h2>Foundations of<br /><em>Learning Science</em></h2><p>12 questions <span /> About 8 minutes</p></div><div className="play-mark">&#8594;</div></div><div className="next-progress"><span style={{ width: "58%" }} /></div><div className="next-footer"><span>58% confidence</span><span>Continue where you left off</span></div></section>
          <section className="signal-card" id="progress"><div className="card-kicker">YOUR LEARNING SIGNAL</div><div className="signal-score"><strong>72</strong><span>/ 100<br /><b>overall confidence</b></span></div><div className="signal-bars"><span style={{ height: "54%" }} /><span style={{ height: "78%" }} /><span style={{ height: "66%" }} /><span style={{ height: "88%" }} /><span style={{ height: "74%" }} /><span style={{ height: "96%" }} /><span style={{ height: "82%" }} /></div><p>Up 12 points from your first assessment <b>↗</b></p></section>
        </div>
        <section className="sources-section" id="sources"><div className="section-heading"><div><p className="card-kicker">YOUR SOURCES</p><h2>Keep your thinking in one place.</h2></div><a className="outline-button" href="/upload">+ Add source</a></div><div className="source-list"><article><span className="source-icon pdf">PDF</span><div><h3>Foundations of Learning Science</h3><p>Lecture notes <span /> Added Aug 28, 2026</p></div><strong>Ready</strong><span className="source-arrow">-&gt;</span></article><article><span className="source-icon notes">TXT</span><div><h3>Midterm study guide</h3><p>Personal notes <span /> Added Aug 24, 2026</p></div><strong>Ready</strong><span className="source-arrow">-&gt;</span></article></div></section>
      </section>
    </main>
  );
}