'use client';

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/home" className="logo">interv2</Link>

      {session && (
        <div className="user-info">
          <img
            src={session.user.image}
            alt="Profile"
            className="profile-pic"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="dropdown">
              <p>{session.user.name}</p>
              <p className="email">{session.user.email}</p>
              <button className="signout-btn" onClick={() => signOut()}>Sign Out</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
