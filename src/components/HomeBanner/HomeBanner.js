import React from 'react';

const HomeBanner = () => {
    return (
        <div>
          <div className="carousel mx-auto rounded-xl mt-10 mb-10 w-3/5">
  <div id="item1" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1663373460374-d78ee5369fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='' className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1663314326611-9e2fd4f11b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZSUyMDE0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='' className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1592726664819-98c3e9f8b10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b25lcGx1c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt='' className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1607138802860-555d4b0614f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25lcGx1c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt='' className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt='' className="w-full" />
  </div>
  <div id="item6" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1575718120842-54e388d8cc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbXN1bmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='' className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item5" className="btn btn-xs">5</a>
  <a href="#item6" className="btn btn-xs">6</a>
</div>
        </div>
    );
};

export default HomeBanner;