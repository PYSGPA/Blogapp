import './Contact.css';
// import React from 'react';

function Contact() {
  return (

  <>
  
{/* contact section start */}
<div class="contact_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style={{"text-indent": "0", "border": "none", "color": "#000", "font-size": "18px","text-align": "center"}}>1</li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"style={{"text-indent": "0", "border": "none", "color": "#000", "font-size": "18px", "text-align": "center"}}>2</li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"style={{"text-indent": "0", "border": "none", "color": "#000", "font-size": "18px", "text-align": "center"}}>3</li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"style={{"text-indent": "0", "border": "none", "color": "#000", "font-size": "18px", "text-align": "center"}}>4</li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="contact_"></div>
                        </div>
                        <div class="carousel-item">
                           <div class="contact_img"></div>
                        </div>
                        <div class="carousel-item">
                           <div class="contact_img"></div>
                        </div>
                        <div class="carousel-item">
                           <div class="contact_img"></div>
                        </div>
                     </div>

                  </div> */}
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117738.42428368371!2d75.74126958847049!3d22.753288928143927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4afa520585%3A0xb0585ae9768b11d5!2sIndore%20Talk!5e0!3m2!1sen!2sin!4v1744609309207!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

               </div>
               <div class="col-md-6">
                  <div class="mail_section">
                     <h1 class="contact_taital">Contact us</h1>
                     <input type="" class="email_text" placeholder="Name" name="Name"/>
                     <input type="" class="email_text" placeholder="Phone" name="Phone"/>
                     <input type="" class="email_text" placeholder="Email" name="Email"/>
                     <textarea class="massage_text" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                     <div class="send_bt"><a>send</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* contact section end */}
   
  </>
  );
}

export default Contact;


