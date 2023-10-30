import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import RecentArticle from "./components/recentArticle";
import PopularArticle from "./components/popularArticle";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import SingleArticlePage from "./pages/article";
// import "./App.css";
import "./sass/main.scss";

function App() {
  return (
    <>
      <Header />
      <RecentArticle />
      <PopularArticle />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
