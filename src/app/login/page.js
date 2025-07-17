'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="login-container">
      <h1>Welcome to interv2</h1>
      <button onClick={() => signIn("github", { callbackUrl: "/home" })}>
        Sign in with GitHub
      </button>
    </div>
  );
}
