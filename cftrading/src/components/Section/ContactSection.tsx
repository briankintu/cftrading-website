
import { useForm } from "react-hook-form";
import Iframe from "react-iframe"


interface ContactFormFields {
    name: string;
    first_name: string;
    last_name: string;
    email_id: string;
    
}



const ContactSection = () => {
    const {
        register,
        handleSubmit,
        formState: {},
    } = useForm<ContactFormFields>();

    const onSubmit = (data: ContactFormFields) => {
        console.log(data);
    };


    

    

    return (
        <>
        <section className="w3l-contact-2 py-5" id="contact">
            <div className="container py-lg-5 py-md-4 py-2">
                <div className="header-section text-center mx-0 mb-md-5 mb-4">
                    <h6 className="title-subhny">Get in Touch</h6>
                    <h3 className="title-w3l mt-2">Send a Message</h3>
                </div>
                <div className="contact-grids d-grid">
                    <div className="contact-left-img">
                        <img
                            src="../../../../public/assets/images/vision.jpg"
                            className="img-fluid radius-image"
                            alt=""
                        />
                        <br />
                        <div style={{ display: "inline", justifyContent: "space-between", padding: "10px, 10px" }}>
                            <h6>
                        Location  &nbsp;: &nbsp; New Bagamoyo Road, Kijitonyama Area
                    </h6>
                    <br/>
                    <h6>
                        Address &nbsp; &nbsp;: &nbsp; P.o.Box 32574, Dar Es Salaam,
                        Tanzania
                    </h6>
                    <br />
                    <h6>
                        Phone &nbsp;&nbsp;: &nbsp; &nbsp; +255 622 992 | 743 555 551
                    </h6>
                    <br />
                    <h6>Email &nbsp;: &nbsp; info@cftrading.co.tz / supplier@cftrading.co.tz</h6>
                    </div>
                    </div>
                    <div className="contact-right">
                        <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
                            <div className="input-grids">
                                <input
                                    type="text"
                                    placeholder="Your First Name"
                                    className="contact-input"
                                    {...register("first_name", {
                                        required: "First Name is Required",
                                        minLength: {
                                            value: 2,
                                            message: "First Name Min length is 3 Characters",
                                        },
                                    })}
                                />

                                <input
                                    type="text"
                                    placeholder="Your Last Name*"
                                    className="contact-input"
                                    {...register("last_name", {
                                        required: "Last Name is Required",
                                        minLength: {
                                            value: 2,
                                            message: "Last Name Min length is 3 Characters",
                                        },
                                    })}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email Address i.e abc@example.com*"
                                    className="contact-input"
                                    {...register("email_id", {
                                        required: "Email Address is Required",
                                        minLength: {
                                            value: 2,
                                            message: "Last Name Min length is 3 Characters",
                                        },
                                    })}
                                />
                                
                            </div>
                            <div className="form-buttonhny text-lg-right">
              <button  type="submit" className="btn btn-style btn-primary">Send Message</button>
            </div>
                        </form>
                    </div>
                </div>
                <div className="map-iframe mt-5 mb-lg-5 pb-lg-4">
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                        width="100%"
                        height="400"
                        styles={{ border: "0px" }}
                        allow="fullscreen"
                    ></Iframe>
                    
                </div>
            </div>
                
                        
                                    
            
        </section>
        </>
    )
}
export default ContactSection