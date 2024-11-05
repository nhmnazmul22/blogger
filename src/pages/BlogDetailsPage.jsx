import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogDetailRequest } from "../Apis/BlogApis";
import BlogDetails from "../components/BlogDetails";
import Layout from "../layout/Layout";

const BlogsByCategory = () => {
  const { blogId } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await BlogDetailRequest(blogId);
      setList(data);
    })();
  }, []);

  return <Layout>{<BlogDetails list={list} />}</Layout>;
};

export default BlogsByCategory;
