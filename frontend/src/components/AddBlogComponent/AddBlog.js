import './AddBlog.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurlBlog } from '../../Apiurl';

function AddBlog({ onBlogAdded }) {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [output, setOutput] = useState("");
  const AuthorName = localStorage.getItem('name');

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', AuthorName);
    formData.append('picon', file);
    formData.append("email", localStorage.getItem("email"));

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };

    try {
      await axios.post(apiurlBlog + "save", formData, config);
      setTitle("");
      setContent("");
      setFile(null);
      setOutput("Blog Added Successfully!");

      if (onBlogAdded) onBlogAdded(); 
    } catch (err) {
      console.error("Error posting blog", err);
      setOutput("Something went wrong!");
    }
  };

  return (
    <div className="container-fluid py-2 wow fadeInUp">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title mb-4">
              <h1 className="display-5 mb-0">Add Blog Here!</h1>
              <font style={{ color: "blue" }}>{output}</font>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Title:</label>
                  <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <br />
                <div className="form-group">
  <label>Blog Content:</label>
  <textarea className="form-control" value={content} onChange={e => setContent(e.target.value)} required  rows="3"></textarea>
</div>
                
                <br />
                <div className="form-group">
                  <label>Author Name:</label>
                  <input type="text" className="form-control" value={AuthorName} disabled />
                </div>
                <br />
                <div className="form-group">
                  <label>Blog Icon:</label>
                  <input type="file" name="picon" className="form-control" onChange={handleChange} required />
                </div>
                <br />
                <button type="submit" className="btn btn-danger">Add Blog</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
