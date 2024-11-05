import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";

import {
  AboutPage,
  BlogDetailsPage,
  BlogsByCategory,
  ContactPage,
  HomePage,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/by-category/:categoryId" element={<BlogsByCategory />} />
        <Route path="/blog-details/:blogId" element={<BlogDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
