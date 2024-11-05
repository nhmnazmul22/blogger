import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogsByCategoryRequest } from "../Apis/BlogApis";
import BlogList from "../components/BlogList";
import Layout from "../layout/Layout";

const BlogsByCategory = () => {
  const { categoryId } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await BlogsByCategoryRequest(categoryId);
      setList(data);
    })();
  }, []);

  return (
    <Layout>
      <BlogList list={list} />
    </Layout>
  );
};

export default BlogsByCategory;
