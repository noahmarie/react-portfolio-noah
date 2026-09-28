import "./Education.css";

export default function Education() {
  return (
    <section className="education">

      <h1 className="education-title">Education</h1>

      <div className="edu-section">
        <h2>Digital Health Engineering Technology</h2>
        <p className="school">Centennial College</p>
        <p className="details">
          Diploma Program • In Progress  
          <br />
          GPA: <strong>4.166</strong>
        </p>
      </div>

      <div className="edu-section">
        <h2>Certifications & Credentials</h2>
        <ul className="edu-list">
          <li>SAS AI Foundations Knowledge Badge (Apr 2026)</li>
          <li>Implement a Responsible Generative AI Solution - Microsoft Foundry Badge (Jan 2026)</li>
          <li>Ethical Considerations in AI-Based Technologies in Education (Dec 2025)</li>
          <li>International Baccalaureate Certificate (May 2025)</li>
        </ul>
      </div>

      <div className="edu-section">
        <h2>Relevant Coursework</h2>
        <ul className="edu-list">
          <li>Database Management (SQL)</li>
          <li>Python and C# Programming</li>
          <li>Web Development & UI Design</li>
          <li>Healthcare Information Systems</li>
          <li>Unix/Linux Operating Systems</li>
        </ul>
      </div>
    </section>
  );
}
