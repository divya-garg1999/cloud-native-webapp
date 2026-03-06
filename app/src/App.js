import React from 'react';
import './index.css';

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>Divya Garg</h1>
        <p>Email: divya.garg6543@gmail.com | Phone: +91 8814948564</p>
        <p><a href="https://www.linkedin.com/in/divya-garg1999/">LinkedIn Profile</a></p>
        <p className="tagline">Result-driven Site Reliability Engineer | Cloud-Native Specialist</p>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>
          Result-driven professional with 4 years of experience in site reliability, cloud infrastructure management,
          and incident resolution. Proficient in AWS, Kubernetes, Docker, Terraform, and CI/CD automation, with proven
          expertise in maintaining 99.8% system availability for business-critical applications.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Site Reliability Engineer - Cognizant</h3>
          <span>Jan 2025 – Feb 2026</span>
          <ul>
            <li>Sustained 99.8% system uptime in production environments</li>
            <li>Automated workflows, reducing manual tasks by 38%</li>
            <li>Configured CI/CD pipelines for microservices</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>L2 Analyst - Cognizant</h3>
          <span>Dec 2022 – Dec 2024</span>
          <ul>
            <li>Achieved 96% resolution within SLA timelines</li>
            <li>Improved SLA compliance by 30% through structured follow-ups</li>
            <li>Prepared root cause analysis documents quarterly</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Intern - Cognizant</h3>
          <span>Jul 2022 – Nov 2022</span>
          <ul>
            <li>Designed responsive UI with HTML, CSS, JS</li>
            <li>Configured MySQL databases and CRUD operations</li>
            <li>Tested APIs with Postman, fixing 15% functional issues</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Docker, Kubernetes, Terraform, Ansible</li>
          <li>CI/CD with Jenkins, GitLab CI, Azure DevOps</li>
          <li>AWS (EKS, ELB, ECR), Splunk, APM</li>
          <li>Incident Management, SLA Management, Root Cause Analysis</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>CloudNative Web Application Deployment:</strong> Automated AWS EKS deployment with Docker & Terraform, achieving 99% uptime.</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p>J.C. Bose University of Sciences and Technology, YMCA</p>
        <p>M.Tech & B.Tech in Computer Science</p>
      </section>
    </div>
  );
}

export default App;
