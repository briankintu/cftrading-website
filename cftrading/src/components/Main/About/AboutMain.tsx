const AboutMain = () => {
  return (
    <div>
    <section className="w3l-breadcrumb">
    <div className="container">
      <ul className="breadcrumbs-custom-path">
        <li><a href="index.html">Home</a></li>
        <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> About Us</li>
      </ul>
    </div>
  </section>
  <section className="w3l-index3" id="about">
    <div className="midd-w3 py-5">
      <div className="container py-lg-5 py-md-3">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-md-5 mb-4 align-self">
            <h6 className="title-subhny">About Our Company</h6>
            <h3 className="title-w3l mt-2">CF Trading Limited  <br/>was founded after a series of salty experiences trading various products and services</h3>
            <p className="mt-md-4 mt-3">With accumulated experience and skills, we began the business to fill the 
gap of quality customer services and innovative solutions to various client needs. We offer a range of products and services that seek to solve most of our clients’ pressing needs in a timely way. Our values which come from our previous experiences 
form the core of our operations. They guide and remind us of our vision and mission in every client we serve. We want to be the leading company making clients’ lives easier through our innovative solutions to their needs</p>
              <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="contact.html">Contact us <span className="fa fa-arrow-right ml-2" aria-hidden="true"></span></a>
            </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img src="assets/images/vision.jpg" alt="" className="radius-image img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>

  )
}

export default AboutMain