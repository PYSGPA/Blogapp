import React, { useEffect, useState } from 'react';
import './Blog.css';
import AddBlog from '../AddBlogComponent/AddBlog';
import axios from 'axios';
import { __Blogapiurl } from '../../Apiurl';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

// Importing comment and edit icons from FontAwesome
import { FaComment, FaEdit } from 'react-icons/fa'; 

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState(""); // State to hold the comment input
  const [isCommenting, setIsCommenting] = useState(null); // Track which blog is being commented on
  const userEmail = localStorage.getItem('email');

  // Fetch blogs from the API
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(__Blogapiurl + `fetch?email=${userEmail}`);
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
  
  const likehandler = () => {
    setLiked(!liked);
  };

  const handleCommentClick = (blogId) => {
    if (userEmail) { // Ensure user is logged in
      setIsCommenting(blogId); // Set the blog to be commented on
    } else {
      toast.error('You need to be logged in to comment!');
    }
  };

  const handleCommentSubmit = async (blogId) => {
    if (newComment.trim()) {
      try {
        // Assuming the API has a route to add a comment to a blog
        await axios.post(__Blogapiurl + `addComment`, {
          blogId,
          userEmail, // Get the logged-in user's email
          comment: newComment,
        });

        // Reset the comment input and fetch updated blogs
        setNewComment('');
        setIsCommenting(null);
        fetchBlogs(); // Refresh the list of blogs with the new comment added
        toast.success('Comment added successfully!');
      } catch (err) {
        console.error('Error adding comment:', err);
        toast.error('Failed to add comment');
      }
    } else {
      toast.warning('Please enter a comment');
    }
  };

  // Define the handleEditClick function here
  const handleEditClick = (blogId) => {
    console.log('Edit clicked for blog:', blogId);
    // You could open an edit modal or navigate to an edit page
    // Example: Redirect to an edit page
    // window.location.href = `/edit-blog/${blogId}`; 
  };

  return (
    <>
      <ToastContainer />

      <div className="text-center mb-4">
        <button className="btn btn-danger add-blog-btn" onClick={() => setShowAddBlog(true)}>
          Add New Blog
        </button>
      </div>

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

      <div className="about_section layout_padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
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
                    <div className="like_icon" onDoubleClick={likehandler}>
                      <img
                        src={liked ? './assets/images/red-like-icon.png' : './assets/images/like-icon.png'}
                        alt="like icon"
                      />
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

                    {/* Social Icons */}
                    <div className="social_icon_main mt-2 d-flex justify-content-between align-items-center">
                      <div className="social_icon">
                        <ul className="d-flex">
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

                      {/* Comment and Edit Icons on the right side */}
                      <div className="comment-edit-icons d-flex align-items-center">
                        <FaComment
                          onClick={() => handleCommentClick(blog._id)} // Replace with the actual blog id
                          size={24}
                          color="black" // Black color for comment icon
                          style={{ cursor: 'pointer', marginLeft: '15px' }}
                        />
                        <FaEdit
                          onClick={() => handleEditClick(blog._id)} // Handle Edit Click
                          size={24}
                          color="black" // Black color for edit icon
                          style={{ cursor: 'pointer', marginLeft: '10px' }}
                        />
                      </div>
                    </div>

                    {/* Comment Input Area */}
                    {isCommenting === blog._id && (
                      <div className="comment-section">
                        <textarea
                          placeholder="Type your comment here..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="comment-input"
                        />
                        <button onClick={() => handleCommentSubmit(blog._id)} className="comment-submit-btn">
                          Submit Comment
                        </button>
                      </div>
                    )}

                    {/* Display comments */}
                    <div className="comments">
                      {blog.comments && blog.comments.map((comment, i) => (
                        <div key={i} className="comment">
                          <p><strong>{comment.userEmail}:</strong> {comment.text}</p>
                        </div>
                      ))}
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
