import React from 'react';
import './index.css';

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>Divya Garg</h1>
        <p className="tagline">DevOps Engineer | Cloud-Native Enthusiast</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          DevOps professional with 3 years of experience in automation, CI/CD pipelines,
          and cloud-native deployments. Passionate about building scalable, reliable systems
          using Kubernetes, Terraform, and AWS.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Kubernetes, Docker, Terraform</li>
          <li>CI/CD with Jenkins & GitHub Actions</li>
          <li>AWS EKS, ELB, ECR</li>
          <li>Ansible automation</li>
          <li>Monitoring & Incident Management</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Cloud Native Resume Project:</strong> Frontend on Netlify, Backend on AWS ELB</li>
          <li><strong>Kubernetes Deployment Demo:</strong> Automated rollout with Helm & Terraform</li>
          <li><strong>CI/CD Pipeline:</strong> Jenkins pipeline for containerized microservices</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourusername">linkedin.com/in/yourusername</a></p>
        <p>Email: your.email@example.com</p>
      </section>
    </div>
  );
}

export default App;
