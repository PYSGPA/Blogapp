import React, { useEffect, useState } from 'react';
import './ViewBlog.css';
import axios from 'axios';
import { __ViewBlogapiurl, __ViewCommentapiurl } from '../../Apiurl';

function ViewBlog() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({}); // Track expanded state for each blog
  const [liked, setLiked] = useState(false); // like state
  //comment code started

  const [commentInputs, setCommentInputs] = useState({});
  const [comments, setComments] = useState({});

  //comment code ended

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(__ViewBlogapiurl + `fetch`);
      setBlogs(res.data);
      res.data.forEach(blog => fetchCommentsForBlog(blog._id));
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

  const likehandler = () => {
    setLiked(!liked);
  }

  //comment code started

  const fetchCommentsForBlog = async (blogId) => {
    try {
      const res = await axios.get(`${__ViewCommentapiurl}fetch?blogId=${blogId}`);
      setComments(prev => ({ ...prev, [blogId]: res.data }));
    } catch (err) {
      console.error("Failed to fetch comments", err);
    }
  };

  const handleCommentSubmit = async (e, blogId) => {
    e.preventDefault();
    try {
      await axios.post(`${__ViewCommentapiurl}add`, {
        blogId,
        username: 'Anonymous', // or replace with actual user if you have auth
        commentText: commentInputs[blogId] || ''
      });
      setCommentInputs(prev => ({ ...prev, [blogId]: '' }));
      fetchCommentsForBlog(blogId);
    } catch (err) {
      console.error("Failed to post comment", err);
    }
  };

  //comment code ended

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
                  <div className="like_icon" onDoubleClick={likehandler}>
                    <img src={liked ? "./assets/images/red-like-icon.png" : "./assets/images/like-icon.png"} alt="like icon" />
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
                    {/* Comment code start */}

                    <div className="comment-section mt-3">
                      <h5>Comments</h5>
                      <form onSubmit={(e) => handleCommentSubmit(e, blog._id)}>
                        <input
                          type="text"
                          value={commentInputs[blog._id] || ''}
                          onChange={(e) => setCommentInputs(prev => ({ ...prev, [blog._id]: e.target.value }))}
                          placeholder="Add a comment"
                          required
                          className="form-control mb-2"
                        />
                        <button type="submit" className="btn btn-primary btn-sm">Post</button>
                      </form>
                      <div className="comment-list mt-2">
                        {(comments[blog._id] || []).map((c, i) => (
                          <div key={i} className="comment">
                            <strong>{c.username}</strong>: {c.commentText}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Comment code end */}
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
