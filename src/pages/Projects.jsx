import "./Projects.css";
import pawpals from "../assets/pawpals.jpg";
import dashboard from "../assets/dashboard.jpg";
import ancop from "../assets/ancop.jpg";

export default function Projects() {
    return (
    <section className="projects">
            <h1 className="projects-title">My Projects</h1>

        <div className="projects-grid">

        {/* Project 1 — Paw Pals Website*/}
        <div className="project-card">
            <img src={pawpals} alt="Paw Pals Website Project" className="project-img" />
            <h2>Paw Pals Animal Shelter Website</h2>
            <p>
            <strong>Role:</strong> Web Developer & Designer  
            <br />
            <strong>Outcome:</strong> Designed and built a clean, accessible website for an animal
            shelter, helping highlight rescue, adoption initiatives and community engagement.
            </p>
        </div>

        {/* Project 2 — Health Dashboard */}
        <div className="project-card">
            <img src={dashboard} alt="Health Data Dashboard" className="project-img" />
            <h2>Health Data Dashboard</h2>
            <p>
            <strong>Role:</strong> Creative Designer & Planner  
            <br />
            <strong>Outcome:</strong> Designed and planned out a product that is patient-centred, designed to reduce miscommunication and 
            improve consistency in healthcare management. 
            It’s purpose is to provide clear and accessible medical instructions, 
            organize appointments, and track prescribed medications through reminders 
            and visual summaries.
            </p>
        </div>

        {/* Project 3 — ANCOP Leadership */}
        <div className="project-card">
            <img src={ancop} alt="ANCOP Event Leadership" className="project-img" />
            <h2>ANCOP Event Leadership</h2>
            <p>
            <strong>Role:</strong> Student Leader & Volunteer  
            <br />
            <strong>Outcome:</strong> Supported the construction of a community school centre, helped 
            coordinate donation distribution and outreach in underserved areas to ensure fair access to 
            essential resources. Built meaningful connections with children and families through structured 
            programming at orphanages and community meal events.
            </p>
        </div>

        </div>
    </section>
    );
}
