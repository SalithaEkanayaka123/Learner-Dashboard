export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav-bar">
        <a className="wordmark" href="/" aria-label="Luma home"><span className="wordmark-mark">L</span> luma</a>
        <div className="nav-links"><a href="#how-it-works">How it works</a><a href="#for-teams">For teams</a></div>
        <a className="nav-login" href="/login">Sign in <span aria-hidden="true">-&gt;</span></a>
      </nav>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Adaptive learning, made visible</p>
          <h1>Study less.<br /><em>Understand</em> more.</h1>
          <p className="hero-intro">Luma turns your notes, readings, and past papers into a living assessment that knows where your understanding needs work.</p>
          <div className="hero-actions"><a className="button button-primary" href="/login">Start learning <span aria-hidden="true">-&gt;</span></a><a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">&#8595;</span></a></div>
          <div className="trust-row"><span className="avatar-stack"><i /> <i /> <i /></span><span>Built for curious minds<br /><strong>and serious progress.</strong></span></div>
        </div>
        <div className="hero-visual" aria-label="Preview of an adaptive assessment dashboard">
          <div className="visual-paper"><div className="paper-top"><span className="mini-label">TODAY&apos;S FOCUS</span><span className="paper-dots">•••</span></div><div className="progress-line"><span /></div><p className="question-count">Question 07 <span>/ 12</span></p><h2>Which idea best explains<br />the shift in perspective?</h2><div className="answer-list"><div className="answer selected"><b>A</b><span>Context shapes meaning</span><strong>&#10003;</strong></div><div className="answer"><b>B</b><span>Facts exist independently</span></div><div className="answer"><b>C</b><span>Memory is always reliable</span></div></div><div className="paper-bottom"><span><span className="spark">&#10022;</span> Confidence is rising</span><span>58%</span></div></div>
          <div className="visual-note note-top"><span className="note-icon">+</span><span>Find your<br /><strong>knowledge gaps</strong></span></div><div className="visual-note note-bottom"><span className="note-icon coral">&#8599;</span><span>Questions<br /><strong>that adapt</strong></span></div><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
        </div>
      </section>
      <section className="proof-strip" id="how-it-works"><p>One clear path from <strong>material</strong> to mastery.</p><div className="proof-steps"><span><b>01</b> Bring your material</span><span><b>02</b> Meet your gaps</span><span><b>03</b> Build your confidence</span></div></section>
      <section className="lower-section" id="for-teams"><p className="eyebrow">A better signal</p><h2>Because knowing what<br /><em>you don&apos;t know</em> changes everything.</h2></section>
    </main>
  );
}
