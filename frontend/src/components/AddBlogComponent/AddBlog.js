import './AddBlog.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { apiurlBlog } from '../../Apiurl';
function AddProduct() {
  const [file, setFile] = useState();
  const [title , setTitle] = useState();
  const [content , setContent] = useState();
  // const [catName , setCatName] = useState();
  // const [subCatName , setSubCatName] = useState();
  // const [AuthorName , setAuthorName] = useState();
  // const [price , setPrice] = useState();
  const [output , setOutput] = useState();
  // const [ cDetails , setCategoryDetails ] = useState([]);
  // const [ scDetails , setSubCategoryDetails ] = useState([]);
  
  // useEffect(()=>{
  //     axios.get(apiurlCat+"fetch").then((response)=>{
  //       setCategoryDetails(response.data);  
  //     }).catch((error)=>{
  //       console.log(error);   
  //     });
  // });
  
  const handleChange=(event)=>{
    setFile(event.target.files[0]);
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData =new FormData();
    formData.append('title', title);
    formData.append('content', content);
    // formData.append('subcatnm', subCatName);
    // formData.append('authorname', AuthorName);
    // formData.append('price', price);
    formData.append('picon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
   axios.post(apiurlBlog+"save", formData, config).then((response) => {
      setTitle("");
      setContent("");
      // setSubCatName("");
      // setAuthorName("");
      // setPrice("");
      setOutput("Blog Added Successfully....");
    });
  }
  
  return (
    <>
    {/* About Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title mb-4">
                      <h1 class="display-5 mb-0">Add Blog Here !!!!!</h1>
                      <font style={{"color":"blue"}} >{output}</font>
                      <form>
                        <div class="form-group">
                          <label for="title">Title:</label>
                          <input type="text" class="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <br/>
                        <div class="form-group">
                          <label for="title">Blog Content:</label>
                          <input type="text" class="form-control" value={content} onChange={e => setContent(e.target.value)} />
                        </div>
                        <br/>
                        <div class="form-group">
                          <label for="picon" name='picon'>Blog Icon:</label>
                          <input type="file" name='picon' class="form-control" onChange={handleChange} />
                        </div>
                        <br/>
                        <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Blog</button>
                        <br/>
                      </form>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    </div>
    {/* About End */}


    </>
    );
}

export default AddProduct;
