import "./Login.css";
// import React from 'react';
import { Component, useState } from "react";
import axios from "axios";
import { __userapiurl } from "../../Apiurl";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [output, setOutput] = useState();
  const handleSubmit = () => {
    if (email == " ") {
      setOutput("Email is required");
    } else if (password == " ") {
      setOutput("Password is required");
    } else {
      const userDetail = { email: email, password: password };
      axios
        .post(__userapiurl + "login", userDetail)
        .then((response) => {
          //alert(response.data.token) //response ek object hota h jiske subobj me data hota h and data bhi ek obj h jiske subobj me
          // token hoga
          // alert(response.data.userList._id)

          // browser ke temporary storage pr apka data hota h jisse apke login hone pr data se match krke apko dikhata h
          // do type ka storage hota h session and local storage
          // localStorage.setItem("token",response.data.token)
          // but response.data.userList._id itna bda likhna pdh rha h
          var user = response.data.userList;
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("_id", user._id);
          localStorage.setItem("name", user.name);
          localStorage.setItem("email", user.email);
          localStorage.setItem("password", user.password);
          localStorage.setItem("mobile", user.mobile);
          localStorage.setItem("address", user.address);
          localStorage.setItem("gender", user.gender);
          localStorage.setItem("role", user.role);
          localStorage.setItem("status", user.status);
          localStorage.setItem("info", user.info);
          localStorage.setItem("city", user.city);

          setOutput("Login successful ");

          // detect kro kisne login kiya h
          // but msg show krke ky kroge direct navigate kr do
          // (user.role=="admin")?setOutput("login as a user"):setOutput("login as a admin");
          //  (user.role=="admin")?navigate("/admin"):navigate("/user");
          if (user.role == "admin") {
            // setOutput("login as a admin");
            navigate("/admin");
          } else {
            setOutput("successful")
            navigate("/user");
          }
        })
        .catch((error) => {
          // console.log(error)
          setOutput("Login unsuccessful , please verify your detail");
        });
    }
  };
  return (
    <>
      <div class="container-fluid overflow-hidden py-5 px-lg-0">
        <div class="container about py-5 px-lg-0">
          <div class="row g-5 mx-lg-0">
            <div
              class="col-lg-12 about-text wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h1 class="mb-5">Welcome to Login page</h1>
              <font style={{ color: "blue" }}>{output}</font>
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <form>
                      {/* to check its working or not */}
                      {/* {name} */}
                      <div class="mb-3">
                        <label for="email" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div class="mb-3">
                        <label for="password" class="form-label">
                          Password{" "}
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
}

export default Login;
