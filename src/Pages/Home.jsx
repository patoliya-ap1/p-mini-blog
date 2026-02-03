import { ErrorBoundary } from "react-error-boundary";
import Banner from "../Component/Banner";
import Category from "../Component/Category";
import LatestBlogs from "../Component/LatestBlogs";
import BloggingBanner from "../assets/Blogging Banner.jpg";
import ErrorFallBack from "../Component/ErrorFallback";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Banner */}
        <div className="col-span-3">
          <Banner bannerImage={BloggingBanner} />
        </div>
        {/* Latest Blog */}
        <div className="col-span-3 sm:col-span-2 gap-3">
          <div>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
              <LatestBlogs />
            </ErrorBoundary>
          </div>
        </div>
        {/* Category */}
        <div className="col-span-3 sm:col-span-1">
          <Category />
        </div>
      </div>
    </div>
  );
};
export default Home;
