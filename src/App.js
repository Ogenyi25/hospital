import React from 'react';
import './App.css';
import logo from '../src/img/doc.jpg';
import "./fontello/css/fontello.css";
import video from './img/videoplayback.mp4';

class Landing extends React.Component {
  render() {
    return (
      <div id="grad1">
        <div className="body">
          <nav className="nav">
            <div className="links">
              <a href="#our-solutions">Our Solution</a>
              <a href="#about-us">About Us</a>
              <a href="./">Blog</a>
              <a href="#contact-us">Contact Us</a>
              <button className="button">Schedule Test</button>
            </div>
            <h1>OGENYI'S MEDICAL HOME</h1>
            <p className="p">Health professionals who act as a first point <br /> of consultation </p>
          </nav>
          <div className="container">
            <div className="left">
              <img src={logo} alt="" />

            </div>

            <div className="right">
              <h2>HEALTH SYSTEM</h2>
              <h5>
                The organisation and medical system is committed to the healthy state <br /> of it’s client.
              At Ogenyi Laboratories we are committed to making sure <br /> you stay healthy all the years of your life.
                              A visit will convince you.
              </h5>
              <button className="learn-more">Learn More</button>

            </div>
          </div>
          <br />
          <br />
          <div className="services">
            <div className="time">
              <h3>Opening Hours</h3> { /*<span className="vl"></span>*/}
              <p>Open round the clock for convenience, <br />quick and easy access</p>
              <i className="icon-clock" style={{
                fontSize: "80px", color: "rgb(120, 84, 180)",
                paddingLeft: "10px"
              }} />
              <span style={{ fontSize: "30px", color: "rgb(120, 84, 180)" }}>24hrs</span>

            </div>
            <div className="medical">
              <h3> Medical Professionals</h3>
              <p>Qualified and certified physicians for <br />quality medical care</p>
              <i className="icon-user-md" style={{
                fontSize: "80px", color: "rgb(84, 84, 182)",
                paddingLeft: "40px"
              }} />

            </div>
            <div className="emergency">
              <h3>Emergency Services</h3>
              <p>Efficient and comprehensive emergency <br />services</p>
              <i className="icon-ambulance" style={{
                fontSize: "80px", color: "rgb(197, 73, 64)",
                paddingLeft: "70px"
              }} />

            </div>
          </div>

          <br />

          {/*about section begins here.*/}

          <div id="about-us">
            <div className="row">
              <div className="row1">
                <h2 className="about">ABOUT US</h2>
                <p className="paragraph">Ogenyi's Medical Home is a leading multi-super speciality hospital
                 in Nasarawa, Nigeria and home to Nigeria famous medical personnels.
                 Our core speciality departments (orthopaedics, cardiology and cardiothoracic surgery,
                 gastroenterology – surgical and medical and nephrology) are represented and led by highly
                 qualified and successful surgeons with education and work experience in Nigeria, India, USA, UK,
                 Canada and other European countries.<br />
                  Our mission is to serve the health care needs of our community by providing comprehensive
                  care to prevent illness, relieve suffering, restore health and promote well being during
                 each life stage.</p>
              </div>
              <div className="row2">
                <video controls src={video} type="video/mp4"></video>

              </div>
            </div>

          </div>

          {/* Our solution begins here */}

          <div id="our-solutions">
            <h2 className="our-solution">OUR SOLUTIONS</h2>
            <br />
            <div className="solution">
              <div className="solution1">
                <video controls src={video} type="video/mp4"></video>

              </div>

              <div className="solution2">
                <h3 className="solution2-1">
                  Some of our medical solutions include -:
                </h3>
                <br />
                <span>
                  <h3 className="solution2-1"></h3>
                  <i className="icon-ambulance" style={{
                    fontSize: "100px", color: "rgb(84, 84, 182)",
                    background: "white", borderRadius: "15px", marginLeft: "70px"
                  }} />
                  <i className="icon-ambulance" style={{
                    fontSize: "100px", color: "rgb(84, 84, 182)",
                    background: "white", borderRadius: "15px", marginLeft: "70px", 
                  }} />
                  <i className="icon-ambulance" style={{
                    fontSize: "100px", color: "rgb(84, 84, 182)",
                    background: "white", borderRadius: "15px", marginLeft: "70px", 
                  }} />

                </span>
                <h3 className="solution2-1"></h3>
                <span>
                  <i className="icon-ambulance" style={{
                    fontSize: "100px", color: "rgb(84, 84, 182)", marginBottom: "30px",
                    background: "white", borderRadius: "15px", marginLeft: "70px", 
                  }} />
                </span>

              </div>
            </div>

          </div>

          <section id="contact-us">
            <div>
              <h2 className="contact"> CONTACT US </h2>
            </div>
            <div className="contact-form">
              <div className="form-container-holder">
                <div className="form-container">
                  <form className="form">
                    <input className="form-input" id="name" type="text" placeholder="Your Name *" required="required"
                      data-validation-required-message="Please enter your name." />

                    <input className="form-input" id="email" type="email" placeholder="Your Email *" required="required"
                      data-validation-required-message="Please enter your email address." />

                    <input className="form-input" id="phone" type="tel" placeholder="Your Phone *" required="required"
                      data-validation-required-message="Please enter your phone number." />

                    <input className="form-input" id="location" type="text" placeholder="Your Location *" required="required"
                      data-validation-required-message="Please enter your phone number." />
                  </form>
                </div>
                <div className="form-area">
                  <textarea class="text-area" id="message" placeholder="Your Message *" required="required"
                    data-validation-required-message="Please enter a message."></textarea>
                </div>
              </div>
              <button id="sendMessageButton" className="btn" 
              type="submit">Send Message</button>
            </div>
          </section>

          <footer className="footer">
            <div>
            <span class="copyright">Copyright &copy; Your Website 2019. Design by OGENYI for OGENYI'S MEDICAL HOME.</span>
            </div>
          </footer>

        </div>
      </div>
    );

  }
}

export default Landing;