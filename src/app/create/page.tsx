"use client";
import AddPostButton from "@/components/AddPostButton";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

import { useFormStatus } from "react-dom";
import { useState } from "react";
import { addPost } from "@/lib/actions";
const Create = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="w-full h-screen flex flex-col ">
      <div>
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="w-full h-max flex gap-4 text-4xl  p-8 items-center ">
              <UserButton />
              <div>me</div>
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
      <form
        action={(formData) => addPost(formData, img?.secure_url || "")}
        className="flex gap-4  flex-col  "
      >
        <textarea
          className="w-full h-[400px]  bg-none p-8 text-xl "
          placeholder="type your thoughts here.."
          name="desc"
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="w-full h-full flex flex-col space-y-8  py-8">
          <AddPostButton />
          <button className="w-full text-center border-4 border-gray-300 p-4 text-2xl bg-white  text-black font-semibold rounded-md">
            Save as draft
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
