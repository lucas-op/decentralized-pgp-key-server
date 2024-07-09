import { ConnectKitButton } from "connectkit";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className=" border-b backdrop-blur shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-lg font-bold ">
          DPKS
        </Link>
        <ConnectKitButton />
      </div>
    </nav>
  );
}

export default Navbar;
