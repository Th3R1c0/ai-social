import AddPost from "@/components/AddPost";
import Stories from "@/components/Stories";
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6 h-full  flex-1 flex-grow">
      <div className="w-full">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
