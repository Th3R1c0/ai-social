"use client";

import { switchLike } from "@/lib/actions";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useOptimistic, useState } from "react";
import { FaHeart, FaRegHeart, FaRetweet, FaShare } from "react-icons/fa";

const PostInteraction = ({
  postId,
  likes,
  commentNumber,
}: {
  postId: number;
  likes: string[];
  commentNumber: number;
}) => {
  const { isLoaded, userId } = useAuth();
  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );

  const likeAction = async () => {
    switchOptimisticLike("");
    try {
      switchLike(postId);
      setLikeState((state) => ({
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }));
    } catch (err) {}
  };
  return (
    <div className="flex items-center justify-between text-sm my-4">
      <div className="flex gap-4 md:gap-8">
        <div className="flex items-center gap-4  p-2 rounded-xl">
          <form action={likeAction}>
            <button>
              {optimisticLike.isLiked ? (
                <FaHeart size={20} className=" cursor-pointer text-red-500" />
              ) : (
                <FaRegHeart size={20} className="cursor-pointer" />
              )}
            </button>
          </form>

          <span className="text-gray-500">
            {optimisticLike.likeCount}
            <span className="hidden md:inline"> Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4  p-2 rounded-xl">
          <Image
            src="/comment.png"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />

          <span className="text-gray-500">
            {commentNumber}
            <span className="hidden md:inline"> Comments</span>
          </span>
        </div>
        <div className="flex items-center gap-4  p-2 rounded-xl">
          <FaShare size={20} className="cursor-pointer" />

          <span className="text-gray-500">
            <span className="hidden md:inline"> Share</span>
          </span>
        </div>
        <div className="flex items-center gap-4  p-2 rounded-xl">
          <FaRetweet size={20} className="cursor-pointer" />

          <span className="text-gray-500">
            <span className="hidden md:inline"> Repost</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostInteraction;
