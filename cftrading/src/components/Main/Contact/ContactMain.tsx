import Iframe from 'react-iframe'
import ContactForm from './ContactForm'


const ContactMain = () => {
  return (
    
    <section className="w3l-contact-2 py-5" id="contact">
    <div className="container py-lg-5 py-md-4 py-2">
      <div className="header-section text-center mx-0 mb-md-5 mb-4">
        <h6 className="title-subhny">Get in Touch</h6>
        <h3 className="title-w3l mt-2">Send a Message</h3>
      </div>
      <div className="contact-grids d-grid">
        <div className="contact-left-img">
          <img src="assets/images/vision.jpg" className="img-fluid radius-image" alt="" />
        </div>
        <div className="contact-right">
          <h6>Location &nbsp;: &nbsp; New Bagamoyo Road, Kijitonyama Area</h6><br/>
          <h6>Address &nbsp; &nbsp;: &nbsp; P.o.Box 32574, Dar Es Salaam, Tanzania</h6><br/>
          <h6>Phone &nbsp;&nbsp;: &nbsp; &nbsp; +255 622 992 | 743 555 551</h6><br/>
          <h6>Email &nbsp;: &nbsp; info@cftrading.co.tz / supplier@cftrading.co.tz</h6>
          

          
        </div>
      </div>
      <ContactForm />
      

      <div className="map-iframe mt-5 mb-lg-5 pb-lg-4">
        <Iframe url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl' 
        width='100%'
        height='400'
        frameBorder={0}
        styles={{ border: '0px'}}
        allow='fullscreen' />
        
      </div>
    </div>
  </section>

  )
}

export default ContactMain