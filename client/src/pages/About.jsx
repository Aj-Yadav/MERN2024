import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/auth";

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Hi {user ? `Master ${user.username}` : `to our website`}</p>
              <h1>Why Choose Us?</h1>
              <p>
                <strong>Expertise:</strong> Our team comprises seasoned IT
                professionals dedicated to staying at the forefront of industry
                advancements.
              </p>
              <p>
                <strong>Customization:</strong> We recognize that every business
                is unique, which is why we design solutions tailored to your
                specific needs and objectives.
              </p>
              <p>
                <strong>Customer-Centric Approach:</strong> Your satisfaction is
                our priority. We provide exceptional support to address all your
                IT concerns.
              </p>
              <p>
                <strong>Affordability:</strong> We offer competitive pricing
                without compromising on the quality of our services.
              </p>
              <p>
                <strong>Reliability:</strong> You can count on us to be there
                when you need assistance. We are committed to maintaining a
                reliable IT environment that is available 24/7.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="Our Team"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
