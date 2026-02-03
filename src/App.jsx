import { Outlet } from "react-router-dom";
import Header from "./Component/Header";
import CreateBlog from "./Component/CreateBlog";

function App() {
  return (
    <>
      <Header />
      <div className="p-4 flex justify-center">
        <div className="w-[90%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
