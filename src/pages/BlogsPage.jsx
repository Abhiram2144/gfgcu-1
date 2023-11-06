import Layout from "../components/layouts/Layout";
// fake data for now, later fetch it from the data base
import Blogs from "../assets/fakedb.json";
import { useEffect } from "react";
import { useState } from "react";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // fetch the blogs from the api
    setBlogs(Blogs);
  });

 
  console.log(blogs);
  return (
    // Layout has pre-defined margins 
    <Layout>
      <div className="overflow-auto dark:bg-custom-dark-2 bg-gfg-green m-0 p-0  mx-auto w-fit sm:mx-0 sm:w-auto">
        {/* Blog Spot  */}
        <div className="">
          <h1 className="text-center font-bold text-4xl py-7 text-white dark:text-white m-0">
            BLOGSPOT
          </h1>
        </div>

        <section className="container mx-auto px-4 py-8 bg-white w-auto p-0 m-0">
          <h1 className="text-center font-bold text-2xl text-gfg-green">
            Read What People Write About US
          </h1>

          <ul className="p-2 pt-8 dark:text-black">
            {/* only limited reviews */}
            {blogs.slice(0, 3).map((user) => (
              <li key={user.username}>
                <ul>
                  {user.blogs.map((blog) => (
                    <li
                      key={blog.username}
                      className="bg-custom-grey border p-4 m-4 rounded"
                    >
                      <h2 className="text-blue-950 font-bold text-l">
                        {user.username}
                      </h2>
                      <div className="pl-4">
                        <p>{blog.text}</p>

                        <div className="text-right mt-6 flex flex-col md:flex-row">
                          <span className="flex flex-row-reverse">
                            <div>
                              <button className="pl-5 pr-5 hover:scale-x-125 hover:scale-y-125">
                                <i className="fa fa-thumbs-up fa-thin dark:text-gfg-dark text-gfg-green hover:text-gfg-dark dark:hover:text-gfg-green hover:"></i>
                              </button>
                            </div>
                            <p>Likes: {blog.likes}</p>
                          </span>
                          <span className="flex flex-row-reverse">
                            <div>
                              <button className="pl-5 pr-5 hover:scale-x-125 hover:scale-y-125">
                                <i className="fa fa-comment dark:text-gfg-dark text-gfg-green hover:text-gfg-dark dark:hover:text-gfg-green"></i>
                              </button>
                            </div>
                            <p>Comments: {blog.comments}</p>
                          </span>
                          <span className="flex flex-row-reverse">
                            <div>
                              <button className="pl-5 pr-5 hover:scale-x-125 hover:scale-y-125">
                                <i className="fa fa-share dark:text-gfg-dark text-gfg-green hover:text-gfg-dark dark:hover:text-gfg-green"></i>
                              </button>
                            </div>
                            <p>Share</p>
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="text-right">
            <a href="#" className="text-blue-800 hover:underline">
              Load more comments
            </a>
          </div>
        </section>

        {/* Pre fotter */}
        <section className="dark:bg-custom-dark mt-7">
          <div className="bg-white  dark:text-white dark:bg-custom-dark-2 p-8">
            <div className="items-center justify-center p-5 dark:bg-custom-dark">
              <h1 className="text-center font-bold text-3xl pb-5">
                Want to share your own experience?
              </h1>

              <div className="mt-3 text-center">
                <h2 className="mb-3">Write your review and post it on our community page!</h2>
                <div>
                <input
                  type="text"
                  placeholder={"Write your review here:"}
                  className={`dark:text-black rounded p-1 w-96 light:border-2 light:border-green-700 outline-none  dark:outline-none mr-1 `}
                  
                />
                  <button className="bg-gfg-green text-white hover:bg-custom-dark dark:bg-custom-dark-2 dark:text-white w-13 px-4 rounded h-8 dark:hover:bg-gfg-green dark:hover:text-black font-bold mt-3">
                    POST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogsPage;
