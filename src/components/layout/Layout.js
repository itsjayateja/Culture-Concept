import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "../layout/Layout.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Culture Concept",
  description:
    "Bring  your dream home to life with one-on -one Design helps and hand picked products tailored your style, Space and Budget",
  keywords:
    "interior design,interior, living room interior,home interior,kitchen interior,interior decoration",
};
export default Layout;
