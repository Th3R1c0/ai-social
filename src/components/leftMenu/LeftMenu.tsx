import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import Ad from "../Ad";

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
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaHeart,
  FaUser,
  FaMapPin,
} from "react-icons/fa";
import { LuMountain } from "react-icons/lu";
const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div
      className="flex flex-col p-4
xl:h-screen
bg-gray-200
xl:rounded-none rounded-lg shadow-md
justify-between"
    >
      <div className="hidden xl:flex">
        <LuMountain size={35} />
      </div>
      <div className=" xl:h-screen  bg-gray-200 xl:space-y-4 rounded-lg  xl:justify-center justify-between text-sm text-gray-500 flex xl:flex-col ">
        <Link
          href="/"
          className="flex flex-col  items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <FaHome size={35} />
          {/* <span>Home</span> */}
        </Link>

        <Link
          href="/search"
          className="flex flex-col items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <FaSearch size={35} />
          {/* <span>Search</span> */}
        </Link>

        <Link
          href="/create"
          className="flex flex-col items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <FaPlusSquare size={35} />
          {/* <span>Create</span> */}
        </Link>

        <Link
          href="/notifications"
          className="flex flex-col items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <FaHeart size={35} />
          {/* <span>Notifications</span> */}
        </Link>

        <Link
          href="/profile"
          className="flex flex-col items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <FaUser size={35} />
          {/* <span>Profile</span> */}
        </Link>
      </div>
      <div className="hidden xl:flex">
        <FaMapPin size={35} />
      </div>
    </div>
  );
};
export default LeftMenu;
