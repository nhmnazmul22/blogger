import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const BlogList = ({ list }) => {
  if (list.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 gap-6">
          {list.map((item) => (
            <div key={item.id} className="card bg-base-100 w-full shadow-xl">
              <figure>
                <Link to={`/blog-details/${item.id}`}>
                  <img src={item.img} alt={item.title} />
                </Link>
              </figure>
              <div className="card-body">
                <Link to={`/blog-details/${item.id}`}>
                  <h2 className="card-title">{item.title}</h2>
                </Link>
                <p>{item.short}</p>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-outline">
                    <Link to="/">Web Development</Link>
                  </div>
                  <div className="badge badge-outline">
                    {new Date(item.created_at).toDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default BlogList;
