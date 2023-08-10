"use client";

import {
  FaAddressBook,
  FaGlobe,
  FaList,
  FaMusic,
  FaNetworkWired,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideBar() {
  const currentPath = usePathname();

  return (
    <>
      <aside className="h-screen w-1/5 bg-primary float-left border-r-2 border-gray-500">
        <ul className="w-full h-1/3 flex flex-col justify-between ml-10 pt-10">
          <p className="text-gray-600 ">Library</p>
          <Link
            href="/playlist"
            className={`text-gray-500 hover:text-white flex items-center w-1/2 justify-between ${
              currentPath === "/playlist" ? "text-white" : ""
            }`}
          >
            <FaList className="" />
            Playlist
          </Link>
          <Link
            href="/"
            className={`text-gray-500 hover:text-white flex items-center w-1/2 justify-between ${
              currentPath === "/" ? "text-white" : ""
            }`}
          >
            <FaUser />
            Artist
          </Link>
          <Link
            href="/album"
            className={`text-gray-500 hover:text-white flex items-center w-1/2 justify-between ${
              currentPath === "/album" ? "text-white" : ""
            }`}
          >
            <FaAddressBook />
            Album
          </Link>
          <Link
            href="/songs"
            className={`text-gray-500 hover:text-white flex items-center w-1/2 justify-between ${
              currentPath === "/songs" ? "text-white" : ""
            }`}
          >
            <FaMusic />
            Songs
          </Link>
        </ul>

        <ul className="w-full h-1/3 flex flex-col justify-between ml-10 pt-10">
          <p className="text-gray-600 ">Discover</p>
          <Link
            href="/"
            className={`text-gray-500 hover:text-white flex items-center w-1/2 justify-between ${
              currentPath === "" ? "text-white" : ""
            }`}
          >
            <FaShoppingBag />
            Store
          </Link>
          <Link
            href="/"
            className={`text-gray-500 hover:text-white flex items-center w-1/2 justify-between ${
              currentPath === "" ? "text-white" : ""
            }`}
          >
            <FaNetworkWired />
            Radio
          </Link>
          <Link
            href="/"
            className={`text-gray-500 hover:text-white flex items-center w-1/2 justify-between ${
              currentPath === "" ? "text-white" : ""
            }`}
          >
            <FaAddressBook />
            For You
          </Link>
          <Link
            href="/"
            className={`text-gray-500 hover:text-white flex items-center w-1/2 justify-between ${
              currentPath === "" ? "text-white" : ""
            }`}
          >
            <FaGlobe />
            Browse
          </Link>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
