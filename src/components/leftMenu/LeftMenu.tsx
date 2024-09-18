"use client";

import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import Ad from "../Ad"; // Add this import

const OldLeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/activity.png" alt="" width={20} height={20} />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/market.png" alt="" width={20} height={20} />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/albums.png" alt="" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/videos.png" alt="" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/news.png" alt="" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/courses.png" alt="" width={20} height={20} />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/lists.png" alt="" width={20} height={20} />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/settings.png" alt="" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm" />
    </div>
  );
};
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import {
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaHeart,
  FaUser,
  FaMapPin,
} from "react-icons/fa";
import { LuMountain } from "react-icons/lu";

import { usePathname } from "next/navigation"; // Update the import

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  const { user, isLoaded } = useUser();
  const pathname = usePathname(); // Get the current pathname
  const links = [
    // Create an array of link objects
    { href: "/", icon: <FaHome size={35} />, label: "Home" },
    { href: "/search", icon: <FaSearch size={35} />, label: "Search" },
    { href: "/create", icon: <FaPlusSquare size={35} />, label: "Create" },
    {
      href: "/notifications",
      icon: <FaHeart size={35} />,
      label: "Notifications",
    },
    {
      href: `/profile/${user?.id}`,
      icon: <FaUser size={35} />,
      label: "Profile",
    },
  ];

  return (
    <div className="flex flex-col p-4 xl:h-screen bg-white xl:rounded-none rounded-lg shadow-md justify-between">
      <div className="hidden xl:flex">
        <LuMountain size={35} />
      </div>
      <div className="xl:h-screen bg-white xl:space-y-4 rounded-lg xl:justify-center justify-between text-sm text-gray-500 flex xl:flex-col">
        {links.map(
          (
            { href, icon, label } 
          ) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-4 p-2 rounded-lg hover:bg-slate-100 ${
                pathname === href ? "text-black" : ""
              }`} 
            >
              {icon}
            </Link>
          )
        )}
      </div>
      <div className="hidden xl:flex">
        <div>
          <ClerkLoading>
            <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className="w-full h-max flex gap-4 text-4xl items-center ">
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex items-center gap-2 text-sm">
                {" "}
                PLEASE LOG IN
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};
export default LeftMenu;
