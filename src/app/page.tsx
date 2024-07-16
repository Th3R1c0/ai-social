import AddPost from "@/components/AddPost";
import Stories from "@/components/Stories";
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6 h-full bg-red-200 flex-1 flex-grow">
      <div className="w-full bg-blue-200">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      {/* <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div> */}
    </div>
  );
};

export default Homepage;
