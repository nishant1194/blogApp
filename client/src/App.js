import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "../src/admin/dashboard/Dashboard.js";
import Loggin from "./admin/login/Loggin.js";
import SignUp from "./admin/SignUp/SignUp.js";
import CategoryList from "./admin/Categorylist/CategoryList.js";
import BlogList from "./admin/Bloglist/BlogList.js";
import AddBlog from "./admin/Addblog/AddBlog.js";
import AddCategoryList from "./admin/Addcategory/AddCategoryList.js";
import Home from "./admin/Home/Home.js";
import CommentList from './admin/CommentList/CommentList.js'
import UserLayout from "./user/UserLayout.js";
import UserHome from "./user/Home/UserHome.js";
import AboutUser from "./user/AboutMe/AboutUser.js";
import Contact from "./user/Contact/Contact.js";
import Bloog from "./user/Blog/Bloog.js";
import Logoutt from "./admin/logout/Logoutt.js";
import Editcategory from "./admin/EditCategory/Editcategory.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children:[{
      path: "/" ,
      element: <UserHome />
    },
    {
      path: "/about" ,
      element: <AboutUser />
    },{
      path: "/contact" ,
      element: <Contact />
    },{
      path: "/bllog" ,
      element: <Bloog />
    },
  ]

  },
  {
    path: "admin",
    element: <AdminLayout />,
  },
  {
    path: "admin/login",
    element: <Loggin />,
  },
  {
    path: "admin/SignUp",
    element: <SignUp />,
  },
  {
    path: "admin/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin/dashboard/home",
        element: <Home />,
      },
      {
        path: "admin/dashboard/category-list",
        element: <CategoryList />,
      },
      {
        path: "admin/dashboard/blog-list",
        element: <BlogList />,
      },
      {
        path: "admin/dashboard/add-blog",
        element: <AddBlog />,
      },
      {
        path: "admin/dashboard/add-category",
        element: <AddCategoryList />,
      },
      {
        path: "admin/dashboard/edit-category",
        element: <Editcategory />,
      },
      {
        path: "admin/dashboard/comment",
        element: <CommentList />,
      },
      {
        path: "admin/dashboard/logout",
        element: <Logoutt />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  );
}

export default App;
