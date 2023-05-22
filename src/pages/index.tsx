import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
      </Head>
      <>
        <div className="hero_area">
          <div className="bg-box">
            <img src="images/slider-bg.jpg" alt="" />
          </div>
          <header className="Header_section">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <span>SPS</span>
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className=""> </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        {" "}
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pricing.html">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="why.html">
                        Why Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="testimonial.html">
                        Testimonial
                      </a>
                    </li>
                  </ul>
                  <form className="form-inline">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                      title="submit"
                    >
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </header>
          <section className="slider_section ">
            <div className="container">
              <div className="detail-box col-md-9 mx-auto px-0">
                <h1>Finding Parking Lots Made Easy</h1>
              </div>
              <div className="find_form_container">
                <form action="#">
                  <div className="form-row">
                    <div className="col-md-4 px-0">
                      <div className="form-group ">
                        <label>Your Name</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 px-0">
                      <div className="form-group">
                        <label>Your Mobile Number</label>
                        <div className="input-group ">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="xxxxxxxxxx"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-box">
                    <button type="submit" className="">
                      <span>Search Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>

        <section className="about_section layout_padding">
          <div className="container  ">
            <div className="Heading_container ">
              <h2>About Us</h2>
            </div>
            <div className="row">
              <div className="col-lg-6 ">
                <div className="img-box">
                  <img src="images/about-img.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="detail-box">
                  <h3>We Are Here For Help</h3>
                  <p>
                    At Smart Parking, we are committed to providing our
                    customers with a seamless parking experience. If you have
                    any questions or concerns about using our parking management
                    system, we are here to help. Our dedicated customer support
                    team is available to assist you through the app or website.
                    Whether you need help locating your reserved parking spot or
                    have questions about payment or cancellation policies, our
                    team is always happy to assist you. We strive to make
                    parking as easy and stress-free as possible, and we are
                    committed to providing exceptional customer service to
                    ensure that your parking experience is a positive one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why_section layout_padding-bottom">
          <div className="container">
            <div className="col-md-10 px-0">
              <div className="Heading_container">
                <h2>Why Choose Us</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="images/w1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>No Extra Booking Fees</h4>
                    <p>
                      There will not be extra booking fees. The pricing of the
                      parking is done according to the pricing. The pricing cost
                      can be viewed in the pricing section.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="images/w2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>Online Payments</h4>
                    <p>
                      We also support online payment via FonePay, eSewa, imePay
                      or any other digital scanning methods.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/w3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>Simple Booking Process</h4>
                    <p>
                      Just select the parking spot, leave your phone number and
                      name and it is yours for the day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing_section layout_padding">
          <div className="bg-box">
            <img src="images/pricing-bg.jpg" alt="" />
          </div>
          <div className="container">
            <div className="Heading_container Heading_center">
              <h2>Our Pricing</h2>
            </div>
            <div className="col-xl-10 px-0 mx-auto">
              <div className="row">
                <div className="col-md-6 col-lg-4 mx-auto">
                  <div className="box">
                    <h4 className="price">Rs.15</h4>
                    <h5 className="name">For Two-Wheelers</h5>
                    <p>Per hour</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mx-auto">
                  <div className="box box-center">
                    <h4 className="price">Rs.20</h4>
                    <h5 className="name">For Four-Wheelers or more</h5>
                    <p>Per hour</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mx-auto">
                  <div className="box">
                    <h4 className="price">Rs.50</h4>
                    <h5 className="name">
                      For Two-wheelers, Four-wheelers or more
                    </h5>
                    <p>For more than 1 hour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client_section layout_padding">
          <div className="container">
            <div className="Heading_container col">
              <h2>
                What Says Our <span>Client</span>
              </h2>
            </div>
            <div className="client_container">
              <div className="carousel-wrap ">
                <div className="owl-carousel client_owl-carousel">
                  <div className="item">
                    <div className="box">
                      <div className="detail-box">
                        <p>
                          "I recently used Smart Parking for the first time and
                          I must say, I am thoroughly impressed with their
                          service. The website was user-friendly and made
                          finding and reserving a parking spot near my
                          destination a breeze. When I arrived at the parking
                          location, I was so happy that there was a pre-booked
                          spot for me and didn't have to spend hours finding
                          one. I appreciate how Smart Parking has made the
                          parking experience so convenient and stress-free. I
                          will definitely be using this service again in the
                          future and highly recommend it to anyone looking for a
                          hassle-free parking solution."
                        </p>
                      </div>
                      <div className="client_id">
                        <div className="img-box">
                          <img src="images/c1.webp" alt="" className="img-1" />
                        </div>
                        <div className="name">
                          <h6>Pemba Tamang</h6>
                          <p>Merryland English School</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box">
                      <div className="detail-box">
                        <p>
                          "I have been using Smart Parking for several months
                          now and I am extremely satisfied with their service.
                          The website is easy to use and allows me to reserve
                          parking spots in advance, which saves me a lot of time
                          and hassle. The customer support team is always
                          available to assist me with any questions or concerns
                          I have. I highly recommend Smart Parking to anyone
                          looking for a reliable and convenient parking
                          solution. It has made my life so much easier and
                          stress-free."
                        </p>
                      </div>
                      <div className="client_id">
                        <div className="img-box">
                          <img src="images/c2.webp" alt="" className="img-1" />
                        </div>
                        <div className="name">
                          <h6>Bijay Tamang</h6>
                          <p>Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info_section ">
          <div className="container">
            <div className="info_top ">
              <div className="row ">
                <div className="col-md-6 col-lg-3 info_col">
                  <div className="info_form">
                    <h4>To Connect Us</h4>
                    <form action="">
                      <input type="text" placeholder="Enter Your Email" />
                      <button type="submit">Subscribe</button>
                    </form>
                    <div className="social_box">
                      <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 info_col ">
                  <div className="info_detail">
                    <h4>About Us</h4>
                    <p>
                      We are smart parking service providing students based on
                      Islington College.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 info_col ">
                  <div className="info_detail">
                    <h4>Online Booking</h4>
                    <p>
                      You can reserve your parking spot in advance and not worry
                      about not finding a parking spot.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 info_col">
                  <h4>Contact us</h4>
                  <p>SPS</p>
                  <div className="contact_nav">
                    <a href="">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span>Kathmandu, Nepal</span>
                    </a>
                    <a href="">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>Call : 9810202586</span>
                    </a>
                    <a href="">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span>Email : gprabesh023@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer_section">
          <div className="container">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">SPS</a>
            </p>
          </div>
        </footer>
        <Script
          onLoad={() => {
            const popper = document.createElement("script");
            popper.src =
              "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";
            document.body.append(popper);

            popper.onload = () => {
              const niceSelect = document.createElement("script");
              niceSelect.src = "js/jquery.nice-select.min.js";
              document.body.append(niceSelect);

              niceSelect.onload = () => {
                const bootstrap = document.createElement("script");
                bootstrap.src = "js/bootstrap.js";
                document.body.append(bootstrap);

                bootstrap.onload = () => {
                  const owlCarousel = document.createElement("script");
                  owlCarousel.src =
                    "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
                  document.body.append(owlCarousel);

                  owlCarousel.onload = () => {
                    const custom = document.createElement("script");
                    custom.src = "js/custom.js";
                    document.body.append(custom);
                  };
                };
              };
            };
          }}
          src="js/jquery-3.4.1.min.js"
        ></Script>
      </>
    </>
  );
}
