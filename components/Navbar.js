"use client";
import { AlignRight, Link2, X } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  function hideSideMenu(e) {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setIsSideMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", hideSideMenu);
    return () => {
      document.removeEventListener("mousedown", hideSideMenu);
    };
  });

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, [pathname]);

  const navRef = useRef();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-10">
      {/* Desktop Navbar */}
      <div className="navbar bg-transparent backdrop-blur-2xl border-b border-base-200 px-10 hidden md:flex">
        <div className="navbar-start">
          <div className="logo">
            <Link href={"/"}>
              <h2 className="font-semibold text-lg flex justify-center items-center gap-1 text-blue-500">
                <span>BitLinks</span>
                <span>
                  <Link2 className="mt-0.5" />
                </span>
              </h2>
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <Link href={"/"} className="btn btn-ghost uppercase rounded-lg">
            Home
          </Link>
          <Link
            href={"/generate"}
            className="btn btn-ghost uppercase rounded-lg"
          >
            Generate Url
          </Link>
          <Link
            href={"/my-urls"}
            className="btn btn-ghost uppercase rounded-lg"
          >
            My URLs
          </Link>
        </div>
        <div className="navbar-end space-x-2">
          <Link
            href={"https://github.com/shubhamxdhapola/BitLinks"}
            target="_blank"
          >
            <button className="btn bg-blue-700 hover:bg-blue-800 duration-300 rounded-full flex justify-center items-center gap-2">
              <span>
                <FaGithub />
              </span>
              <span>GitHub</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="navbar bg-transparent backdrop-blur-2xl border-b border-base-200 px-4 sm:px-6 md:px-8 md:hidden">
        <div className="navbar-start">
          <Link href={"/"}>
            <h2 className="font-semibold flex justify-center items-center gap-1 text-blue-500">
              <span>BitLinks</span>
              <span>
                <Link2 className="mt-0.5" size={20} />
              </span>
            </h2>
          </Link>
        </div>

        <div className="navbar-end" onClick={toggleSideMenu}>
          <span className="cursor-pointer hover:bg-base-200 p-1 duration-300 rounded">
            {isSideMenuOpen ? <X /> : <AlignRight />}
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={navRef}
        className={`border-r bg-base-100 h-screen border-base-300 w-[80vw] sm:w-[70vw] duration-300 fixed z-20 top-[64px] ${
          isSideMenuOpen ? "left-0" : "-left-[10000px]"
        }`}
      >
        <div className="flex flex-col items-start p-5 space-y-3">
          <Link href={"/"} className="btn btn-ghost uppercase rounded-lg">
            Home
          </Link>
          <Link
            href={"/generate"}
            className="btn btn-ghost uppercase rounded-lg"
          >
            Generate Url
          </Link>
          <Link
            href={"/my-urls"}
            className="btn btn-ghost uppercase rounded-lg"
          >
            My URLs
          </Link>
          <Link
            href={"https://github.com/shubhamxdhapola/BitLinks"}
            className="mt-4"
            target="_blank"
          >
            <button className="btn bg-blue-700 hover:bg-blue-800 duration-300 rounded flex justify-center items-center gap-2 mx-3 w-full">
              <span>
                <FaGithub />
              </span>
              <span>GitHub</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
