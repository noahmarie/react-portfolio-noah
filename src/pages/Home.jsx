import "./Home.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <section className="home">
      <div className="home-hero">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-subtitle">
          My name is Noah Marie Giberson. This is my personal portfolio where I showcase my projects, skills, 
          and experiences in the field of Digital Health Engineering Technology.
        </p>

        <Link to="/about" className="home-button">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}
