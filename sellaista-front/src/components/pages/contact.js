import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14386.966200103003!2d28.0808952!3d63.208827449999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfi!2sfi!4v1709114818105!5m2!1sfi!2sfi"
                                style={{ border: "0", width: "100%", height: "350px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="col-md-5">
                            <h4><strong>Contact Us</strong></h4>
                            <form>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="tel" className="form-control" placeholder="Your Phone" />
                                </div>
                                <textarea cols="30" rows="7" className="form-control mb-3" placeholder="Your Message"></textarea>
                                <Link to="#" className="btn btn-outline-primary">
                                    Send Message <i className="fa fa-paper-plane-o ml-2" aria-hidden="true"></i>
                                    <i className="fa">&#9993;</i>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
