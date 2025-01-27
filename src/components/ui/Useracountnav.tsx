'use client';
import { signOut } from "next-auth/react";
const Useracountnav = () => {
  return (
    <button onClick={() => signOut()}>Sign Out</button>
  )
}

export default Useracountnav