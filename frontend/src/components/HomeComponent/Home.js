import './Home.css';
// import React from 'react';

function Home() {
  return (

  <>

  
  {/* banner section start */} 
  <div class="container-fluid">
            <div class="banner_section layout_padding">
               
               <div id="my_slider" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="image_main">
                           <div class="container">
                              <img src="./assets/images/img-1.png" class="image_1"/>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="image_main">
                           <div class="container">
                              <img src="./assets/images/img-1.png" class="image_1"/>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="image_main">
                           <div class="container">
                              <img src="./assets/images/img-1.png" class="image_1"/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" role="button" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
                  </a>
                  <a class="carousel-control-next" role="button" data-slide="next">
                  <i class="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>
         {/* banner section end */} 

  </>
  );
}

export default Home;


