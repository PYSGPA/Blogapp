import React, { useEffect, useState } from 'react';
import './ViewBlog.css';
import axios from 'axios';
import { __ViewBlogapiurl } from '../../Apiurl';

function ViewBlog() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({}); // Track expanded state for each blog

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(__ViewBlogapiurl + `fetch`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  useEffect(() => {
 
      fetchBlogs();
    
  }, []);

  const toggleReadMore = (index) => {
    setExpandedBlogs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
     

      <div className="about_section layout_padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            {[...blogs].reverse().map((blog, index) => {
              const isExpanded = expandedBlogs[index];
              const contentPreview = blog.content.length > 250 ? blog.content.slice(0, 250) + '...' : blog.content;

              return (
                <div className="col-lg-8 col-sm-12 mb-5" key={index}>
                  <div className="about_img">
                    <img src={`./assets/uploads/blogimages/${blog.imagenm}`} alt="Blog" className="blog-image" />
                  </div>
                  <div className="like_icon">
                    <img src="./assets/images/like-icon.png" alt="like icon" />
                  </div>
                  <div className="blog-content-wrapper">
                    <p className="post_text blog-date">Posted On: {new Date(blog.info).toLocaleString()}</p>
                    <h2 className="most_text blog-title">{blog.title || 'Blog Title'}</h2>
                    <p className="lorem_text blog-content">
                      {isExpanded ? blog.content : contentPreview}
                    </p>
                    {blog.content.length > 250 && (
                      <button className="read-more-btn" onClick={() => toggleReadMore(index)}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                  <div className="social_icon_main mt-2">
                    <div className="social_icon">
                      <ul>
                        <li><a><img src="./assets/images/fb-icon.png" alt="fb" /></a></li>
                        <li><a><img src="./assets/images/twitter-icon.png" alt="tw" /></a></li>
                        <li><a><img src="./assets/images/instagram-icon.png" alt="ig" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewBlog;
