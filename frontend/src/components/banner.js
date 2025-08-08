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


    //<button class="btn btn-md btn-success ms-4 ">Contact Us</button>
    {/* <p class="text-lg text-green-800">
      Let's support those who nurture the soil and feed the world.
    </p> */}
  </div>

  {/* <!-- Right Side: Farmer Image --> */}
  {/* <div class="w-full md:w-1/2 flex justify-center md:justify-end">
    <img src="img/" alt="Farmer" class="w-full max-w-sm rounded-xl shadow-md " style={fertilizerImage} />
  </div> */}

  </div>

    <div className="container py-5">

      {/* Welcome Section */}
      <h4>🌱 Welcome to Harmonds</h4>
      <p><strong>Trusted Fertilizer Solutions Backed by Innovation</strong></p>
      <p>
        Harmonds is a name growers trust. With vast experience in conventional fertilizers and a specialized focus on
        <strong> liquid fertilizer technology</strong>, we help farmers achieve healthier crops, faster growth and better yields — season after season.
      </p>
      <hr />

      {/* Why Liquid Fertilizers */}
      <h4>💧 Why Liquid Fertilizers?</h4>
      <p>Liquid fertilizers offer unmatched benefits over granular or powdered options:</p>

      <ul className="list-unstyled">
        <li className="mb-3">
          ✅ <strong>Easy Application</strong><br />
          <small>Applied effortlessly with sprayers for uniform and efficient coverage.</small>
        </li>
        <li className="mb-3">
          ⚡ <strong>Fast-Acting Nutrition</strong><br />
          <small>Nutrients are immediately available for plant uptake, ensuring faster growth and visible results.</small>
        </li>
        <li className="mb-3">
          🌿 <strong>Better Absorption</strong><br />
          <small>Higher absorption rates mean plants get more of what they need, when they need it.</small>
        </li>
        <li className="mb-3">
          ❄️ <strong>Gentle on Roots</strong><br />
          <small>Lower salt content reduces the risk of root burn — ideal for sensitive crops.</small>
        </li>
        <li className="mb-3">
          🧪 <strong>Consistent Formulation</strong><br />
          <small>Every drop contains the same precise blend of nutrients, unlike variable-content granules.</small>
        </li>
        <li className="mb-3">
          🚛 <strong>Lower Freight Costs</strong><br />
          <small>More efficient to ship and store, helping you save on logistics.</small>
        </li>
      </ul>

      {/* Built for Modern Farming */}
      <h4>🚜 Built for Modern Farming</h4>
      <p>At Harmonds, we’re committed to delivering smarter, more efficient fertilizer solutions tailored for the evolving needs of today’s agriculture.</p>
      <p><a href="#" className="text-decoration-underline">[Case Study : Comparison of Liquid NPK with Granular NPK]</a></p>

      {/* Table */}
      <div className="table-responsive mb-4">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th colSpan="5">NPK Required for One Acre</th>
            </tr>
            <tr>
              <th>Type</th>
              <th>Cost of Material</th>
              <th>Freight</th>
              <th>Price</th>
              <th>Cost per Acre Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>NPK Granules</strong></td>
              <td>$375 per tonne</td>
              <td>$2000 USD for 20 MT shipment</td>
              <td>$100 per tonne</td>
              <td>$47.5 (100 Kg/acre)</td>
            </tr>
            <tr>
              <td><strong>NPK Liquid</strong></td>
              <td>$20 per litre</td>
              <td>$2000 for 16 MT shipment (80 drums of 200L)</td>
              <td>$0.125 per litre</td>
              <td>$10.0625 (500 ml/acre)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Conclusion */}
      <p className="text-muted"><em>Note:</em> The above assumptions are based on current market trends.</p>
      <p className="text-primary fw-bold">
        Thus liquid fertilizer (NPK) landed price is approximately one fourth of the price of granular fertilizer (NPK) for one acre of application.
      </p>
      <hr />

      {/* Contact Section */}
      <h5>📞 Need Expert Advice?</h5>
      <p>Our agronomy specialists are here to help.<br />
        Contact Us → <a href="mailto:info@harmonds.com">info@harmonds.com</a>
      </p>
    </div>
</section>


  
 );
export default Banner;

