import { useAuth } from "../Context/auth";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Your Trusted Partner in IT Solutions</p>
              <h1>
                {user
                  ? `Welcome Back, ${user.username}!`
                  : `Welcome to Our Platform`}
              </h1>
              <p>
                Elevate your business with cutting-edge IT solutions designed to
                meet your unique needs. Our expertise ensures that you receive
                the best services tailored to enhance your operations.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Get in Touch</button>
                </a>
                <a href="/services">
                  <button className="btn">Discover Our Services</button>
                </a>
              </div>
            </div>
            <div className="hero-img">
              <img
                src="/images/home.png"
                alt="IT Solutions"
                width="400px"
                height="500px"
              />
            </div>
          </div>
        </section>

        {/* 2nd section */}
        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>100+</h2>
              <p>Innovative Projects Delivered</p>
            </div>
            <div className="div1">
              <h2>15,000+</h2>
              <p>Satisfied Customers Worldwide</p>
            </div>
            <div className="div1">
              <h2>700+</h2>
              <p>Expert Developers</p>
            </div>
            <div className="div1">
              <h2>24/7</h2>
              <p>Support & Maintenance</p>
            </div>
          </div>
        </section>

        {/* 3rd section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/design.png"
                alt="Collaborative Development"
                width="400"
                height="500"
              />
            </div>

            <div className="hero-content">
              <p>Your Success is Our Mission</p>
              <h1>Join Us Today</h1>
              <p>
                Ready to enhance your IT infrastructure? Reach out for a free
                consultation and let’s explore how we can empower your business
                in today’s digital landscape.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect with Us</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Explore More</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
