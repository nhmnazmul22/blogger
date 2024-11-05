import axios from "axios";

//===> Base Api
const Base_Api = "https://basic-blog.teamrabbil.com/api";

//===> Post Category Request
export const postCategoryRequest = async () => {
  const response = await axios.get(`${Base_Api}/post-categories`);
  if (response.status === 200) {
    return response.data;
  } else {
    return [];
  }
};

//===> New Blog Request
export const NewBlogsRequest = async () => {
  const response = await axios.get(`${Base_Api}/post-newest`);
  if (response.status === 200) {
    return response.data;
  } else {
    return [];
  }
};

//===> Blog By Category Request
export const BlogsByCategoryRequest = async (id) => {
  const response = await axios.get(`${Base_Api}/post-list/${id}`);
  if (response.status === 200) {
    return response.data;
  } else {
    return [];
  }
};


//===> Blog By Category Request
export const BlogDetailRequest = async (id) => {
  const response = await axios.get(`${Base_Api}/post-details/${id}`);
  if (response.status === 200) {
    return response.data;
  } else {
    return [];
  }
};