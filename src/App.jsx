import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHotel,
  FaConciergeBell,
  FaChartLine,
  FaUsers,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Slower, smoother animation
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#home">
            <FaHotel className="me-2" /> HotelSys
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-lg-3"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section text-center text-white" id="home">
        <div className="overlay"></div>
        <div className="container position-relative">
          <h1 className="display-2 fw-bold mb-3" data-aos="zoom-in">
            Elevate Your Hospitality
          </h1>
          <p className="lead mb-5 fs-4" data-aos="fade-up" data-aos-delay="200">
            The all-in-one ecosystem for modern hoteliers. Automate workflows,
            increase occupancy, and deliver unforgettable guest experiences.
          </p>

          {/* Unified button container to keep them on the same line */}
          <div
            className="d-flex justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              className="btn btn-lg btn-primary me-3 px-5 shadow fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Get Started
            </button>

            <button
              className="btn btn-lg btn-outline-light px-5 fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5" id="about">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h6 className="text-primary fw-bold text-uppercase">
                Premium Management
              </h6>
              <h2 className="fw-bold mb-4 display-5">
                Why Global Hotels Trust HotelSys
              </h2>
              <a href="testing.jdx">GO</a>
              <p className="text-muted fs-5">
                In an era of digital transformation, HotelSys provides the
                bridge between traditional hospitality and modern efficiency.
                Our platform integrates every touchpoint—from the moment a guest
                searches for a room to their final check-out.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-2">✅ Real-time Cloud Synchronization</li>
                <li className="mb-2">✅ Integrated Payment Gateways</li>
                <li className="mb-2">✅ Multi-property Management Support</li>
              </ul>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="img-fluid rounded-4 shadow-2xl"
                alt="management-dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light" id="features">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-6">Our Powerful Features</h2>
            <div
              className="mx-auto bg-primary mb-4"
              style={{ width: "60px", height: "4px" }}
            ></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 shadow-sm p-3">
                <div className="card-body">
                  <FaConciergeBell className="text-primary fs-1 mb-3" />
                  <h5 className="fw-bold">Smart Reservations</h5>
                  <p className="text-muted">
                    Our AI-driven booking engine optimizes room allocation,
                    manages overbookings, and integrates directly with OTAs like
                    Booking.com and Expedia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-sm p-3">
                <div className="card-body">
                  <FaUsers className="text-primary fs-1 mb-3" />
                  <h5 className="fw-bold">Staff Empowerment</h5>
                  <p className="text-muted">
                    Streamline internal communication. Assign tasks to
                    housekeeping, track maintenance requests, and manage payroll
                    within a single unified dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-sm p-3">
                <div className="card-body">
                  <FaChartLine className="text-primary fs-1 mb-3" />
                  <h5 className="fw-bold">Business Intelligence</h5>
                  <p className="text-muted">
                    Transform raw data into actionable insights. Monitor RevPAR,
                    ADR, and occupancy trends with beautiful, auto-generated
                    visual reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
<div
  className="modal fade"
  id="loginModal"
  tabIndex="-1"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content border-0 shadow-lg rounded-4">
      <div className="modal-header border-0 pb-0">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body p-5 pt-0 text-center">
        <h2 className="fw-bold mb-3">Welcome To HotelSys</h2>
        <p className="text-muted mb-4">
          Enter your credentials to access your dashboard.
        </p>
        <form className="needs-validation text-start" noValidate>
          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">Email Address</label>
            <input
              className="form-control p-3 bg-light border-0"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold text-muted">Password</label>
            <div className="input-group">
              <input
                className="form-control p-3 bg-light border-0"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
              />
              <button
                className="btn btn-light border-0 px-3"
                type="button"
                onClick={togglePasswordVisibility}
                tabIndex="-1"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-100 py-3 fw-bold mb-3 shadow">
            Login to HotelSys
          </button>
        </form>
        
        <p className="small text-muted">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-primary fw-bold text-decoration-none"
            data-bs-target="#signupModal"
            data-bs-toggle="modal"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Signup Modal */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header border-0 pb-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4 p-md-5 pt-0 text-center">
              {/* User Icon */}
              <div
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaUsers size={30} />
              </div>
              <h2 className="fw-bold mb-2">Create Your Account</h2>
              <p className="text-muted mb-4">
                Join our community and manage your stay with ease.
              </p>

              <form className="needs-validation text-start" noValidate>
                {/* Name Row: First, Middle, and Last */}
                <div className="row g-2 mb-3">
                  <div className="col-md-4">
                    <label className="form-label small fw-bold text-muted">
                      First Name
                    </label>
                    <input
                      className="form-control p-3 bg-light border-0"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label small fw-bold text-muted">
                      Middle Name
                    </label>
                    <input
                      className="form-control p-3 bg-light border-0"
                      placeholder="Middle Name"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label small fw-bold text-muted">
                      Last Name
                    </label>
                    <input
                      className="form-control p-3 bg-light border-0"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Contact Row: Email and Phone */}
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">
                      Email Address
                    </label>
                    <input
                      className="form-control p-3 bg-light border-0"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">
                      Phone Number
                    </label>
                    <input
                      className="form-control p-3 bg-light border-0"
                      type="tel"
                      placeholder="+63 900 000 0000"
                      required
                    />
                  </div>
                </div>

                {/* Password Row with Visibility Toggle */}
                <div className="row g-3 mb-4">
                  {/* Password Field */}
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control p-3 bg-light border-0"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                      />
                      <button
                        className="btn btn-light border-0 px-3"
                        type="button"
                        onClick={togglePasswordVisibility}
                        tabIndex="-1" // Prevents tabbing to the eye icon instead of the next input
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control p-3 bg-light border-0"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                      />
                      <button
                        className="btn btn-light border-0 px-3"
                        type="button"
                        onClick={togglePasswordVisibility}
                        tabIndex="-1"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    required
                  />
                  <label
                    className="form-check-label small text-muted"
                    htmlFor="terms"
                  >
                    I certify that the above information is correct and I agree
                    to the{" "}
                    <a
                      href="#"
                      className="text-decoration-none text-primary fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#privacyModal" // This matches the ID of the modal below
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <button className="btn btn-primary w-100 py-3 fw-bold mb-3 shadow">
                  Sign Up Now
                </button>
              </form>

              <p className="small text-muted mb-0">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-primary fw-bold text-decoration-none"
                  data-bs-target="#loginModal"
                  data-bs-toggle="modal"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <div
        className="modal fade"
        id="privacyModal"
        tabIndex="-1"
        aria-hidden="true"
        style={{ zIndex: 1060 }}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header border-0 bg-light">
              <h5 className="modal-title fw-bold">Privacy Policy</h5>
              {/* FIX: Redirects 'X' back to signupModal */}
              <button
                type="button"
                className="btn-close"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4 text-start">
              <h6 className="fw-bold">1. Data Collection</h6>
              <p className="small text-muted">
                We collect your name, email, and phone number to provide
                services.
              </p>

              <h6 className="fw-bold">2. Use of Information</h6>
              <p className="small text-muted">
                Your data is used to process reservations and improve
                experiences.
              </p>

              <h6 className="fw-bold">3. Security</h6>
              <p className="small text-muted">
                We use industry-standard encryption to protect your data.
              </p>
            </div>
            <div className="modal-footer border-0">
              {/* FIX: Redirects 'I Understand' back to signupModal */}
              <button
                type="button"
                className="btn btn-primary w-100 py-2 fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer text-white">
        <div className="container text-center">
          <div className="mb-4">
            <h4 className="fw-bold">HotelSys</h4>
            <p className="text-secondary">
              Simplifying hospitality for a better tomorrow.
            </p>
          </div>
          <div className="mb-4 fs-4">
            <a href="#" className="me-4 text-white hover-opacity">
              <FaFacebookF />
            </a>
            <a href="#" className="me-4 text-white hover-opacity">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover-opacity">
              <FaInstagram />
            </a>
          </div>
          <hr className="bg-secondary" />
          <p className="mb-0 text-secondary pb-3">
            © 2026 HotelSys Enterprise. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
