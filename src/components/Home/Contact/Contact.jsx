import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary text-uppercase">Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form className="text-center">
                        <input type="text" className="form-control" required placeholder="Email Address" /> <br />
                        <input type="text" className="form-control" placeholder="Subject" /> <br />
                        <textarea name="" className="form-control" required id="" cols="30" rows="10" placeholder="Message"></textarea> <br />
                        <input type="submit" value="SEND" className="w-100 btn btn-brand text-center" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;