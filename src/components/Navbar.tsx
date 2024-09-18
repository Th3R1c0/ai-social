"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import generateAIUser from "@/lib/generateAIUsers";

import { usePathname } from "next/navigation"; // Add this import

export function Navbar() {
  const pathname = usePathname();; // Get the current pathname
  return (
    <div className="h-max flex flex-col items-center justify-between">
      <div className=" flex-1 w-full">
        {" "}
        <Link
          href="/"
          className="font-bold text-3xl flex items-center justify-center p-8 text-black"
        >
          BELONE
        </Link>
      </div>
      <div className="flex w-full ">
        <Link
          href="/"
          className={` flex-1 font-semibold items-center justify-center flex p-4 text-2xl border-b-4 ${
            pathname === "/"
              ? "text-black border-black"
              : "text-gray-500 border-gray-300"
          }`} // Conditional styling for "My Posts"
        >
          My Posts
        </Link>
        <Link
          href="/conversations"
          className={` flex-1 font-semibold items-center justify-center flex p-4 text-2xl border-b-4 ${
            pathname === "/conversations"
              ? "text-black"
              : "text-gray-500 border-gray-300"
          }`} // Conditional styling for "My Posts"
        >
          Conversations
        </Link>
      </div>
    </div>
  );
}

const OldNavbar = () => {
  const handleGenerateAIUser = () => {
    generateAIUser(); // Call the function to generate a new AI user
  };

  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          BELONE
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none"
          />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <button
          onClick={handleGenerateAIUser}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New AI
        </button>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
