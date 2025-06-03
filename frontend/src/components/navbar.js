import './navbar.css';

const logoStyle = {
      maxWidth: '100px',
      height: 'auto'
}

const contactBtn = {
  maxWidth : '30px',
  
}

const background = {
  background:'	#d4edda'
}
 

const navbar = () => (
<div>

<nav className="navbar navbar-expand-lg navbar-light  px-4 shadow-sm sticky-top fixed-top navbar-custom " style={background}>
        <a className="navbar-brand fw-bold" >
          <img src="/img/harmondsLogo.png" class="d-block " alt="..."  style={logoStyle}/>
        </a>
        <div className="ms-auto">  
          <button className="" >
            <img src="/img/image.png"  style={contactBtn} />
          </button>
        </div>
</nav>         
    </div>
 );
export default navbar;