import { NavLink } from "react-router-dom";
import { useBloggingContext } from "../Context/BloggingContext/BloggingContext";
import BlogCard from "./BlogCard";
import MessageContainer from "./MessageContaner";

const LatestBlogs = () => {
  const {
    values: { blogs },
  } = useBloggingContext();

  console.log(blogs);

  return (
    <div>
      <h2 className="mb-2">Latest Blogs</h2>
      {blogs?.length === 0 && (
        <MessageContainer message="Please add at least one Blog" />
      )}
      <div className="lg:grid grid-cols-2 gap-3 ">
        {blogs?.length > 0 &&
          blogs?.slice(0, 4).map(({ id, title, content, category, user }) => {
            return (
              <BlogCard
                key={id}
                id={id}
                title={title}
                content={content}
                category={category}
                user={user}
              />
            );
          })}
      </div>
    </div>
  );
};
export default LatestBlogs;
