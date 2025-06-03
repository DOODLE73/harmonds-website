import './certificate.css'

const imgStyle ={
    width: '140px',
    height: '140px',
     overflow: 'hidden'
}


const certificate = () => (
<section class="py-5 bg-light" >
  <div class="container text-center">
    <div class="row justify-content-center g-4">
      
      <div class="col-6 col-md-3">
        <div class="rounded-circle shadow mx-auto" style={imgStyle}>
          <img src="https://via.placeholder.com/120" class="img-fluid w-100 h-100 object-fit-cover"></img>
        </div>
        <p class="mt-2 fw-medium">Circle 1</p>
      </div>

      
      <div class="col-6 col-md-3">
        <div class="rounded-circle shadow mx-auto" style={imgStyle}>
          <img src="https://via.placeholder.com/120"  class="img-fluid w-100 h-100 object-fit-cover"></img>
        </div>
        <p class="mt-2 fw-medium">Circle 2</p>
      </div>

      
      <div class="col-6 col-md-3">
        <div class="rounded-circle shadow mx-auto" style={imgStyle}>
          <img src="https://via.placeholder.com/120"  class="img-fluid w-100 h-100 object-fit-cover"></img>
        </div>
        <p class="mt-2 fw-medium">Circle 3</p> 
      </div>

      
      <div class="col-6 col-md-3">
        <div class="rounded-circle shadow mx-auto" style={imgStyle}>
          <img src="https://via.placeholder.com/120"  class="img-fluid w-100 h-100 object-fit-cover"></img>
        </div>
        <p class="mt-2 fw-medium">Circle 4</p>
      </div>
    </div>
  </div>
</section>
 );
export default certificate;