import React from "react";
import "./Resume.css";

const Resume: React.FC = () => (
  <div className="resume-container">
    <header className="resume-header">
      <h1>Jack Pearson</h1>
      <p>
        <a href="mailto:jackpearson@pitt.edu">jackpearson@pitt.edu</a> | (267) -
        218 - 8860 | LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/jackbpearson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          jackbpearson
        </a>
      </p>
    </header>

    <section className="resume-section">
      <h2>EDUCATION</h2>
      <div className="education-content">
        <div className="education-main">
          <p>
            <strong>University of Pittsburgh</strong>, Fredrick Honors College,
            College of Business Administration
          </p>
          <p>
            Bachelors of Philosophy in Business Administration, Major in
            Finance, Minor in Spanish
          </p>
        </div>
        <div className="education-date">
          August 2021 - December 2024
          <p>GPA: 3.6/4</p>
        </div>
      </div>
      <p className="relevant-coursework">
        <strong>Relevant Coursework:</strong> Consulting Field Project (Katz),
        Environmental Economics (CMU), Markets and Trading, Sustainability
        Honors
      </p>
    </section>

    <section className="resume-section">
      <h2>EXPERIENCE</h2>
      <div className="experience-item">
        <h3>Forevergreen</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">
          Co-Founder & CPO | October 2023-present
        </p>
        <ul>
          <li>
            Raised over 20.5k in non-equity financing and founded a team of 6
            working to provide consumer access to carbon credits.
          </li>
          <li>
            Develop an App to calculate, track, and offset your carbon
            footprint, coded in Typescript with React Native and Expo.
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>BNP Paribas</h3>
        <p className="experience-location">New York City, NY</p>
        <p className="experience-position">
          Sales and Trading Intern | June 2024-August 2024
        </p>
        <ul>
          <li>
            Pitched a bond trade as a High Yield Credit Analyst, building
            financial models and shadowing traders across the bank.
          </li>
          <li>
            Directly support Software and Tech Analyst in Equity research
            analyst during launch, pulling and tracking data, building valuation
            models from scratch.
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Federated Hermes</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">Intern | January 2024-May 2024</p>
        <ul>
          <li>
            Collected and analyzed financial reporting data on environmental and
            social contributions large public companies.
          </li>
          <li>
            Researched ESG/Responsible Investing policies and strategies for
            major Asset Mangers on the East Coast.
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Diamond Tropical Hardwoods</h3>
        <p className="experience-location">Telford, PA</p>
        <p className="experience-position">
          Web Developer | March 2019-May 2024
        </p>
        <ul>
          <li>
            Developed and led a marketing internship program, boosting traffic
            the website I built, which generated over $200k in revenue and
            fulfilled 600+ customer orders.
          </li>
          <li>
            Processed customer payments, reconciled accounts, managed inventory,
            and balanced customer ledgers in Sage 50 software.
          </li>
          <li>
            Coordinated logistics of shipments, optimized delivery routes to
            ensure smooth warehouse operations.{" "}
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Pitt Center for Sustainable Business (CSB)</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">
          Associate | October 2022-August 2023
        </p>
        <ul>
          <li>
            Assisted ESG Program Manager in strengthening private sector
            sustainability initiatives and pitched a new Undergraduate
            Sustainable Business credential to the academic dean, assisting
            curriculum and syllabus development.{" "}
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Madrid Easy Consultores</h3>
        <p className="experience-location">Madrid, Spain</p>
        <p className="experience-position">Intern | May 2023-August 2023</p>
        <ul>
          <li>
            Operations Intern at a short-term rental startup, managed tenant
            relations and coordinated repair technicians in Spanish.{" "}
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>University of Pittsburgh Residence Life</h3>
        <p className="experience-location">Madrid, Spain</p>
        <p className="experience-position">
          Resident Assistant | November 2022-May 2023
        </p>
        <ul>
          <li>
            Managed and supported an entire floor of residents in the Business
            Living Learning Community.{" "}
          </li>
        </ul>
      </div>
    </section>

    <section className="resume-section">
      <h2>LEADERSHIP AND ACTIVITIES</h2>
      <div className="leadership-content">
        <div className="leadership-main">
          <p>
            <strong>Pitt Men’s Water Polo Club</strong>
          </p>
          <p>
            <em>Vice President</em>
          </p>
        </div>
        <div className="leadership-location">
          <p>Pittsburgh, PA</p>
          <p>August 2023 - December 2023</p>
        </div>
      </div>

      <div className="leadership-content">
        <div className="leadership-main">
          <p>
            <strong>Center For Organ Recovery & Education</strong>,{" "}
            <em>Consulting Field Project</em>
          </p>
          <p>
            <em>Graduate Consultant</em>
          </p>
        </div>
        <div className="leadership-location">
          <p>Pittsburgh, PA</p>
          <p>August 2023 - December 2023</p>
        </div>
      </div>

      <ul className="leadership-details">
        <li>
          Built an Excel model to address staffing concerns based on the
          expected donation rate of organs. (Offered a job by CORE)
        </li>
      </ul>
    </section>

    <section className="resume-section">
      <h2>CERTIFICATIONS</h2>
      <div className="certifications-content">
        <p>Bloomberg Terminal</p>
        <p>Google Analytics Certification</p>
        <p>Replit 100 Days of Code (Python)</p>
      </div>
    </section>

    <section className="resume-section">
      <h2>INTERESTS AND RELEVANT SKILLS</h2>
      <div className="skills-content">
        <p>
          <strong>Language Skills:</strong> Fluent in English and Spanish
        </p>
        <p>
          <strong>Technical Skills:</strong> Sage50 Accounting, Excel, Python,
          JavaScript, Typescript, HTML, CSS, GitHub, Final Cut Pro, Photoshop
        </p>
        <p>
          <strong>Interests:</strong> Sustainability, guitar, running marathons,
          investing, reading, philosophy, woodworking, writing, chess
        </p>
      </div>
    </section>
  </div>
);

export default Resume;
