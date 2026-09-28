import "./About.css";
import myPhoto1 from "../assets/pic1.jpeg";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-content">
          <img src={myPhoto1} alt="Noah Marie Giberson" className="about-photo" />

          <div className="about-text-block">
            <h1 className="about-title">About Me</h1>

            <p className="about-text">
              My name is <strong>Noah Marie Giberson</strong>. I am a Health Informatics Technology
              student passionate about digital health, patient experience, and creating meaningful
              solutions that improve how people interact with healthcare systems. I value clear
              communication, thoughtful design, and building tools that make a positive impact.
            </p>

<a
  href="/resume.pdf"
  className="resume-link"
  target="_blank"
  rel="noopener noreferrer"
>
  View My Resume (PDF)
</a>

          </div>
        </div>

      </div>
    </section>
  );
}
