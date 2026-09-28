import "./Services.css";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

export default function Services() {
  return (
    <section className="services">
      <h1 className="services-title">Services</h1>

      <div className="services-grid">

        <div className="service-card">
          <img src={service1} alt="Web Development" className="service-img" />
          <h2>Web Development</h2>
          <p>
            I am learning to build clean, modern, responsive websites using React and frontend best practices.
            My focus is on usability, accessibility, and professional design.
          </p>
        </div>

        <div className="service-card">
          <img src={service2} alt="Health Data Visualization" className="service-img" />
          <h2>Health Data Visualization</h2>
          <p>
            I've planned and designed visual reports using my knowledge of Software Requirements to create a  
            product designed to support patient care by improving communication, organization, and adherence to medical instructions.
          </p>
        </div>

        <div className="service-card">
          <img src={service3} alt="Patient & Hospital Support" className="service-img" />
          <h2>Patient & Hospital Support</h2>
          <p>
            With experience in hospital information desk, In-patient Clinical Services and assistance in Rehabilitation Units,
            I provide clear, compassionate support that improves patient experience and communication.
          </p>
        </div>

      </div>
    </section>
  );
}
