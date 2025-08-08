//import '@fontsource/poetsen-one'; // Defaults to weight 400


// const hello = {
//   display:'flex',
// }

// const bannerText = {
  
//  paddingTop: '75px',
//     paddingLeft: '25px',
//     paddingRight:'80px',
//     lineHeight: '63px',
//     lineSpacing :'10px',//
//   fontFamily: 'Poetsen One, sans-serif', fontSize: '2rem' ,
//   wordSpacing:'5px'
// }

// // const fertilizerImage = {
// //   width:'100%',
// //   paddingLeft:'22px',
// //   // marginRight:'50px'
// // }

// const Banner = () => (
 
//  <section class="flex flex-col md:flex-row items-center md:items-start justify-between bg-light p-10 rounded-2xl ">
//   {/* <!-- Left Side: Thoughtful Text --> */}
//   <div style={hello}>

//   <div class="w-full md:w-1/2  md:text-left mb-8 md:mb-0 text-center">
//     <h1 class="text-4xl font-bold text-green-900 leading-snug mb-4 " style={bannerText} >
//       Trusted by growers across the World for delivering high-performance fertilizers that turn every field into a fertile success story.
//     </h1>

   
//     {/* <p class="text-lg text-green-800">
//       Let's support those who nurture the soil and feed the world.
//     </p> */}
//   </div>

//   {/* <!-- Right Side: Farmer Image --> */}
//   {/* <div class="w-full md:w-1/2 flex justify-center md:justify-end">
//     <img src="img/" alt="Farmer" class="w-full max-w-sm rounded-xl shadow-md " style={fertilizerImage} />
//   </div> */}

//   </div>
// </section>


  
//  );
// export default Banner;

import '@fontsource/poetsen-one'; // Defaults to weight 400


const hello = {
  display:'flex',
}

const bannerText = {
  
 paddingTop: '75px',
    paddingLeft: '25px',
    paddingRight:'80px',
    lineHeight: '63px',
    lineSpacing :'10px',
  fontFamily: 'Poetsen One, sans-serif', fontSize: '2rem' ,
  wordSpacing:'5px'
}



// const fertilizerImage = {
//   width:'100%',
//   paddingLeft:'22px',
//   // marginRight:'50px'
// }

const Banner = () => (

  
 
 <section class="flex flex-col md:flex-row items-center md:items-start justify-between bg-light p-10 rounded-2xl ">
  {/* <!-- Left Side: Thoughtful Text --> */}
  <div style={hello}></div>
     <div>
    {/* Bootstrap Carousel at the top */}
    <div id="harmondsCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
            
          <img src="img/banner_1_tall3.jpg" className="d-block w-100" alt="NPK 03:50:50" />
        </div>
        <div className="carousel-item">
          <img src="img/banner_2_tall3.jpg" className="d-block w-100" alt="NPK 25:25:25" />
        </div>
        <div className="carousel-item">
          <img src="img/banner_3_tall3.jpg" className="d-block w-100" alt="Calcium Nitrate" />
        </div>
        <div className="carousel-item">
          <img src="img/banner_4_tall1.jpg" className="d-block w-100" alt="Zincated Urea" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#harmondsCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#harmondsCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  <div class="w-full md:w-1/2  md:text-left mb-8 md:mb-0 text-center">
    <h1 class="text-4xl font-bold text-green-900 leading-snug mb-4 " style={bannerText} >
      Trusted by growers across the World Wide for delivering high-performance fertilizers that turn every field into a fertile success story.
    </h1>

</div>


    
     
  </div>

  {/* <!-- Right Side: Farmer Image --> */}
  {/* <div class="w-full md:w-1/2 flex justify-center md:justify-end">
    <img src="img/" alt="Farmer" class="w-full max-w-sm rounded-xl shadow-md " style={fertilizerImage} />
  </div> */}

 </section>


  
 );
export default Banner;

