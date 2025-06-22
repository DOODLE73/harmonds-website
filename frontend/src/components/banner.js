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
  <div style={hello}>

  <div class="w-full md:w-1/2  md:text-left mb-8 md:mb-0 text-center">
    <h1 class="text-4xl font-bold text-green-900 leading-snug mb-4 " style={bannerText} >
      Trusted by growers across the World for delivering high-performance fertilizers that turn every field into a fertile success story.
    </h1>

   
    {/* <p class="text-lg text-green-800">
      Let's support those who nurture the soil and feed the world.
    </p> */}
  </div>

  {/* <!-- Right Side: Farmer Image --> */}
  {/* <div class="w-full md:w-1/2 flex justify-center md:justify-end">
    <img src="img/" alt="Farmer" class="w-full max-w-sm rounded-xl shadow-md " style={fertilizerImage} />
  </div> */}

  </div>
</section>


  
 );
export default Banner;
