import React, { useEffect, useState } from 'react';
import './Blog.css';
import AddBlog from '../AddBlogComponent/AddBlog';
import axios from 'axios';
import { __Blogapiurl } from '../../Apiurl';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const userEmail = localStorage.getItem('email');

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(__Blogapiurl + `fetch?email=${userEmail}`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchBlogs();
    }
  }, [userEmail]);

  return (
    <>
      <AddBlog onBlogAdded={fetchBlogs} /> 

      <div className="about_section layout_padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            {[...blogs].reverse().map((blog, index) => (
              <div className="col-lg-8 col-sm-12 mb-5" key={index}>
                <div className="about_img">
                  <img src={`./assets/uploads/blogimages/${blog.imagenm}`} alt="Blog" className="blog-image"/>
                </div>
                <div className="like_icon">
                  <img src="./assets/images/like-icon.png" alt="like icon" />
                </div>
                <div className="blog-content-wrapper">
                <p className="post_text blog-date">Posted On: {new Date(blog.info).toLocaleString()}</p>

                <h2 className="most_text blog-title">{blog.title || 'Blog Title'}</h2>

                <p className="lorem_text blog-content">{blog.content}</p>
                </div>
                <div className="social_icon_main">
                  <div className="social_icon">
                    <ul>
                      <li><a><img src="./assets/images/fb-icon.png" alt="fb" /></a></li>
                      <li><a><img src="./assets/images/twitter-icon.png" alt="tw" /></a></li>
                      <li><a><img src="./assets/images/instagram-icon.png" alt="ig" /></a></li>
                    </ul>
                  </div>
                  <div className="read_bt"><a href="#">Read More</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
