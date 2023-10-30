import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SingleArticlePage from "./pages/article";
import ArticlesPage from "./pages/articles";
import ContactForm from "./pages/contact";
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "single-article",
    element: <SingleArticlePage />,
  },
  {
    path: "all-articles",
    element: <ArticlesPage />,
  },
  {
    path: "contact-page",
    element: <ContactForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
