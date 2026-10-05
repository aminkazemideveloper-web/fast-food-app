import { createBrowserRouter, redirect } from "react-router";

import RootLayout from "./src/components/layouts/RootLayout/RootLayout";
import ErrorPage from "./src/pages/Error/Page";
import HomePage from "./src/pages/Home/Page";
import BranchPage from "./src/pages/Branch/Page";
import ContactPage from "./src/pages/Contact/Page";
import StoryPage from "./src/pages/Story/Page";
import CareerPage from "./src/pages/Career/Page";
import SalePage from "./src/pages/SaleB2B/Page";
import NotFoundPage from "./src/pages/NotFound/Page";
import BlogPage from "./src/pages/Blog/Page";
import OrderPage from "./src/pages/OrderPage/Page";
import BranchDetailsPage from "./src/pages/BranchDetails/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, loader: () => redirect("/home") },
      { path: "home", element: <HomePage /> },
      { path: "branches", element: <BranchPage /> },
      { path: "branches/:branchId", element: <BranchDetailsPage /> },
      { path: "blogs", element: <BlogPage /> },
      { path: "order", element: <OrderPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "shopSotry", element: <StoryPage /> },
      { path: "career", element: <CareerPage /> },
      { path: "saleB2B", element: <SalePage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
