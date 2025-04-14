import React, { useEffect, useState } from 'react';
import './Blog.css';
import AddBlog from '../AddBlogComponent/AddBlog';
import axios from 'axios';
import { __Blogapiurl } from '../../Apiurl';
import { ToastContainer, toast } from 'react-toastify'; // Importing react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importing toast styles

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [showAddBlog, setShowAddBlog] = useState(false);

  const userEmail = localStorage.getItem('email');

  // Fetch blogs from the API
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(__Blogapiurl + `fetch?email=${userEmail}`);
      // console.log("Fetched Blogs: ", res.data);  // Added log to check data
      setBlogs(res.data);
    } catch (err) {
      console.error('Failed to fetch blogs', err);
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchBlogs();
    }
  }, [userEmail]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showAddBlog ? 'hidden' : 'auto';
  }, [showAddBlog]);

  const toggleReadMore = (index) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Toast success feedback after adding a blog
  const showSuccessToast = () => {
    toast.success('Blog added successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer />

      {/* Add Blog Button */}
      <div className="text-center mb-4">
        <button className="btn btn-danger add-blog-btn" onClick={() => setShowAddBlog(true)}>
          Add New Blog
        </button>
      </div>

      {/* AddBlog Modal */}
      {showAddBlog && (
        <div className="add-blog-modal">
          <div className="add-blog-overlay" onClick={() => setShowAddBlog(false)}></div>
          <div className="add-blog-content fade-in">
            <button className="close-btn" onClick={() => setShowAddBlog(false)}>
              ×
            </button>
            <AddBlog
              onBlogAdded={() => {
                fetchBlogs(); // Refresh the list of blogs
                setShowAddBlog(false); // Close the modal
                showSuccessToast(); // Show success toast
              }}
            />
          </div>
        </div>
      )}

      {/* Blog Cards Section */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            {/* Check if blogs exist and map over them */}
            {blogs.length > 0 ? (
              [...blogs].reverse().map((blog, index) => {
                const isExpanded = expandedBlogs[index];
                const contentPreview =
                  blog.content.length > 250 ? blog.content.slice(0, 250) + '...' : blog.content;

                return (
                  <div className="col-lg-8 col-sm-12 mb-5 blog-card fade-in" key={index}>
                    <div className="about_img">
                      <img
                        src={`./assets/uploads/blogimages/${blog.imagenm}`}
                        alt="Blog"
                        className="blog-image"
                      />
                    </div>
                    <div className="like_icon">
                      <img src="./assets/images/like-icon.png" alt="like icon" />
                      <p className="author-name mt-2 me-2" style={{ fontWeight: '500', fontStyle: 'italic' }}>
                        — {blog.author || 'Unknown Author'}
                      </p>
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
                          <li>
                            <a>
                              <img src="./assets/images/fb-icon.png" alt="fb" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <img src="./assets/images/twitter-icon.png" alt="tw" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <img src="./assets/images/instagram-icon.png" alt="ig" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center">
                <p>No blogs available to display. Please add a new blog.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
