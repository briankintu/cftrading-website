import Logo from "../../../src/assets/images/eprnext-logo.png"
const Header = () => {
  return (
    
    <header id="site-header" className="w3lhny-head fixed-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg stroke px-0">
        <h1>
          <a className="navbar-brand" href="index.html">
            <img src={Logo} />
          </a>
        </h1>
       

        <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
          <span className="navbar-toggler-icon fa icon-close fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-lg-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="products.html">Products</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="supply.html">Supply</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="processing_packing_trading_distribution.html">Processing, Packing, Trading & Distribution</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="importation_distributing.html">Importation and Exportation</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="manufacturing_distrubtion.html">Manufacturing and Distrubiting</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="Buying_Selling.html">Buying and Selling</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
           
            
          </ul>
        </div>
      
        <div className="mobile-position">
          <nav className="navigation">
            <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                  <div className="mode-container">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
            </div>
          </nav>
        </div>
        
      </nav>
    </div>
  </header>
  
  )
}

export default Header