"use client";

import { useFormStatus } from "react-dom";

const AddPostButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full text-center p-4 text-2xl bg-black text-white font-semibold rounded-md"
    >
      {pending ? (
        <div className="flex items-center gap-2 justify-center">
          <div className="inline-block h-[10px] w-[10px] animate-spin rounded-full border-2 border-white-300 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          Posting
        </div>
      ) : (
        "Post"
      )}
    </button>
  );
};

export default AddPostButton;
