import MainImage from "../../../../public/assets/images/imagestz.jpeg"
const HomeMain = () => {
    return (
        
        <div>
            <section className="w3l-index1 py-5" id="about">
      <div className="container py-lg-5 py-md-3">
          <div className="header-section text-center mx-0 mb-md-5 mb-4">
              <h6 className="title-subhny">About Our Company</h6>
              <h3 className="title-w3l mt-2">CF Trading Limited
                  Was Founded After A Series Of Salty Experiences <br/>Trading Various Products And Services</h3>
          </div>
          <div className="row">
              <div className="col-lg-6 mb-lg-0 mb-md-5 mb-4 align-self">
                  <h4 className="title-sub">With accumulated experience and skills, we began the business <br/>to fill the gap of quality customer services and innovative solutions</h4>
                  <p className="mt-md-4 mt-3">to various client needs. We offer a range of products and services that seek to solve most of our clients pressing needs in a timely way. Our values which come from our previous experiences form the core of our operations. They guide and remind us of our vision and mission in every client we serve. We want to be the leading company making clients lives easier through our innovative solutions to their needs</p>
                  <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html">Read More <span className="fa fa-arrow-right ml-2" aria-hidden="true"></span></a>
              </div>
              <div className="col-lg-6 pl-lg-5">
                  <div className="position-relative">
                      <img src={MainImage} alt="" className="radius-image img-fluid" />
                  </div>
              </div>
          </div>
      </div>
  </section>
        </div>

   





    )
}

export default HomeMain