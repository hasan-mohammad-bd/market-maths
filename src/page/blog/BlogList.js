import React, { useContext } from "react";
import { DataContext } from "../../App";
import SingleBlog from "./SingleBlog";
import notFound from "../../image/notFound.png";

const BlogList = () => {
  const { blogList } = useContext(DataContext);

  return (
    <div>
        {
            blogList.length > 0? blogList.map((singleBlog) => (
                <SingleBlog singleBlog={singleBlog} key={blogList._id}></SingleBlog>
              ))

              :
              
                <div
                style={{
                  background: `url(${notFound})`,
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                }}
                className="w-100 h-[400px] md:h-[600px]"
              ></div>
              
        }
    </div>
  );
};

export default BlogList;
