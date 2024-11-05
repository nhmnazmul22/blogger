import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const BlogDetails = ({ list }) => {
  if (list.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="container m-auto">
        <div className="grid grid-cols-1 pt-12 gap-6">
          <div
            key={list.postDetails.id}
            className="card bg-base-100 w-full shadow-xl"
          >
            <figure>
              <Link to="" className="w-full">
                <img src={list.postDetails.img} alt="img" className="w-full" />
              </Link>
            </figure>
            <div className="card-body">
              {/* <Link to="/">
                <h2 className="card-title">{item.title}</h2>
              </Link> */}
              <p>{list.postDetails.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BlogDetails;
