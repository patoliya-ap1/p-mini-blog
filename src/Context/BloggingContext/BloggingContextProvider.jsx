import { useState } from "react";
import { BloggingContext } from "./BloggingContext";

const BloggingContextProvider = ({ children }) => {
  // global state

  const loginState = JSON.parse(localStorage.getItem("loginState"));

  const user = JSON.parse(localStorage.getItem("user"));

  const [isLoggedIn, setIsLoggedIn] = useState(loginState ?? false);

  const [userInfo, setUserInfo] = useState(user);

  const [blogs, setBlogs] = useState([
    {
      id: 1770010320845,
      title: "Why nonprofits choose GitLab",
      category: "Coding",
      content:
        "Break down silos and empower everyone in your company to collaborate around your code — from development, security, and operations teams to business teams and non-technical stakeholders. With The DevSecOps Platform, you can increase visibility across the entire lifecycle and help improve communication for everyone working together to move software projects forward.\nGitLab’s open core gives you all the benefits of open source software, including the opportunity to leverage the innovations of thousands of developers worldwide continuously working to improve and refine it.",
      user: "john@gmail.com",
    },
    {
      id: 1770010230590,
      title: "11 BEST Adventure & Backpacking Travel Blogs",
      category: "Travelling",
      content:
        "As some of you may know, I live and breathe travel and have been doing so for more than a decade. In a good year, I would travel to over 10 countries, spending at least 2 weeks in each country, and spend months exploring all the interesting things this world has to offer.\nThese travel blogs have become the main sources of my inspiration, and I am here to share this list with you. From the OG travel blogger like Nomadic Matt to the lesser-known blogs, here are the 11 best adventure and backpacking blogs you should follow.",
      user: "john@gmail.com",
    },
    {
      id: 1770010140671,
      title:
        "NextBillion’s Most Influential Articles of 2025: Announcing the Winners of Our Annual Contest",
      category: "Technology",
      content:
        "Sub-Saharan Africa has both the highest energy access and digital connectivity gaps in the world. As Ravi Suchak explains, this is due not to a lack of demand, but to fundamental infrastructure barriers: Telecom towers and mobile networks require a reliable power supply, which is often absent or prohibitively expensive in rural areas, and electricity providers need consistent demand to de-risk rural energy investments.\nHe explores a solution that addresses both of these needs: “connected power,” a development approach that aligns energy and telecom infrastructure by positioning telecom towers as anchor customers for electrification projects.",
      user: "john@gmail.com",
    },
    {
      id: 1770010082969,
      title:
        "nteroperability is the Answer to Scaling Up E-mobility in Africa: What the Continent Can Learn from the EU and India’s Divergent Approaches",
      category: "Technology",
      content:
        "Interoperability can turn distributed hardware systems — electric vehicles and batteries — into a usable network. Without it, drivers and fleets (i.e., the array of vehicles made by specific e-mobility companies) face a number of challenges, including: vendor lock-in, in which they are tied to a single battery or charging company’s proprietary technology; disjointed payment/user journeys, in which different apps or accounts must be used to access various charging or battery swapping services; and underutilised charging or swapping assets. With interoperability, battery charging and swapping infrastructure can be done through a predictable and standardised universal system that replaces network-specific access. This approach supports mass adoption and efficient utilisation, and enhances investor confidence in e-mobility infrastructure companies.",
      user: "john@gmail.com",
    },
  ]);

  const removeBlog = (blogId) => {
    setBlogs((prev) => prev.filter(({ id }) => id != blogId));
  };

  const addBlog = (newBlog) => {
    setBlogs((prev) => [newBlog, ...prev]);
  };

  const updateBlog = (updateID, dataToUpdate) => {
    setBlogs((prev) =>
      prev.map((blog) => {
        if (blog.id == updateID) {
          return { ...blog, ...dataToUpdate };
        } else {
          return blog;
        }
      }),
    );
  };

  const handleLogin = (status, user) => {
    if (status === "login") {
      setIsLoggedIn(true);
      setUserInfo(user);
      localStorage.setItem("loginState", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      setIsLoggedIn(false);
      localStorage.clear();
    }
  };

  const bloggingValues = {
    values: { blogs, isLoggedIn, userInfo },
    removeBlog,
    addBlog,
    updateBlog,
    handleLogin,
  };

  return (
    <BloggingContext.Provider value={bloggingValues}>
      {children}
    </BloggingContext.Provider>
  );
};
export default BloggingContextProvider;
