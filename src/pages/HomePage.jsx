import React, { useEffect, useState } from "react";
import { NewBlogsRequest } from "../Apis/BlogApis";
import BlogList from "../components/BlogList";
import Layout from "../layout/Layout";

const HomePage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await NewBlogsRequest();
      setList(data);
    })();
  }, []);

  return (
    <Layout>
      <BlogList list={list} />
    </Layout>
  );
};

export default HomePage;
