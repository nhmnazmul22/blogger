import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import Categories from "./Categories";

const Footer = () => {
  return (
    <footer className=" bg-base-200 p-10 mt-16">
      <div className="container m-auto">
        <div className="footer text-base-content">
          <aside>
            <Link to="/">
              <img src={Logo} alt="" style={{ mixBlendMode: "multiply" }} />
            </Link>
            <p>
              Pro Blogger Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Pages</h6>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/about" className="link link-hover">
              About
            </Link>
            <Link to="/contact" className="link link-hover">
              Contact
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Category</h6>
            <ul className="flex flex-col gap-2">
              <Categories decoration="underline" />
            </ul>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
