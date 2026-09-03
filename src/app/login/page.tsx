"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <main className="auth-shell">
      <nav className="nav-bar auth-nav"><a className="wordmark" href="/"><span className="wordmark-mark">L</span> luma</a><a className="nav-login" href="/">Back to home <span aria-hidden="true">-&gt;</span></a></nav>
      <section className="auth-content">
        <div className="auth-intro"><p className="eyebrow"><span className="eyebrow-dot" /> Welcome back</p><h1>Your next<br /><em>breakthrough</em><br />starts here.</h1><p>Pick up where you left off and keep making your understanding visible.</p></div>
        <div className="login-panel"><h2>Sign in to Luma</h2><p className="panel-note">Use your account to continue learning.</p><form onSubmit={(event) => { event.preventDefault(); router.push("/dashboard"); }}><label htmlFor="email">Email address</label><input id="email" type="email" placeholder="you@example.com" required /><label htmlFor="password">Password</label><input id="password" type="password" placeholder="Enter your password" required /><div className="form-meta"><label className="remember"><input type="checkbox" /> <span>Remember me</span></label><a href="mailto:support@luma.study">Forgot password?</a></div><button className="button button-primary" type="submit">Continue <span aria-hidden="true">-&gt;</span></button></form><p className="signup-note">New to Luma? <a href="mailto:hello@luma.study">Create an account</a></p></div>
      </section>
    </main>
  );
}