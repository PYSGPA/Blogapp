import './Footer.css';
// import React from 'react';

function Footer() {
  return (

  <>
  
  {/* footer section start */}
  <div class="footer_section layout_padding">
         <div class="container">
            <div class="footer_logo"><a><img src="./assets/images/footer-logo.png"/></a></div>
            <div class="footer_menu">
               <ul>
                  <li><a >Home</a></li>
                  <li><a >About</a></li>
                  <li><a >Blog</a></li>
                  <li><a >Features</a></li>
                  <li><a >contact us</a></li>
               </ul>
            </div>
            <div class="contact_menu">
               <ul>
                  <li><a><img src="./assets/images/call-icon.png"/></a></li>
                  <li><a>Call : +01 1234567890</a></li>
                  <li><a ><img src="./assets/images/mail-icon.png"/></a></li>
                  <li><a>demo@gmail.com</a></li>
               </ul>
            </div>
         </div>
      </div>
      {/* footer section end */}
      {/* copyright section start */}
      <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">Copyright 2020 All Right Reserved By.<a> Free  html Templates</a></p>
         </div>
      </div>
      {/* copyright section end */}
   
  </>
  );
}

export default Footer;


