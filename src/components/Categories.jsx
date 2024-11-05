import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { postCategoryRequest } from "../Apis/BlogApis";
const Categories = ({ decoration = "" }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await postCategoryRequest();
      setCategories(data);
    })();
  }, []);
  return (
    <>
      {categories &&
        categories.map((category) => (
          <li key={category.id}>
            <NavLink
              className={`hover:${decoration}`}
              to={`/by-category/${category.id}`}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
    </>
  );
};

export default Categories;
