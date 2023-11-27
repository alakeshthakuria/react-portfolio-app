import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Projects.css';

function Projects() { 
	const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about');
  };

  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <h3 className="projects-header">Project Title: Full-Stack Web Application Deployment with React, Node.js, and Docker on AWS EC2</h3>
      <p1 className="projects-content">Overview:<br />
Developed a dynamic and responsive full-stack web application using React for the frontend and Node.js for the backend. Leveraged AWS EC2 for hosting the application and utilized Docker for streamlined production deployment. The project showcases proficiency in web development, cloud computing, and containerization. <br /></p1>
    <p2 className="projects-content">Technologies Used: <br /><strong>Frontend:</strong>React <br /><strong>Backend:</strong>Node.js<br /><strong>Deployment:</strong> AWS EC2<br /> <strong>Containerization:</strong> Docker<br /><strong>Version Control:</strong> GitHub<br /> Key Features:<br />
1. <strong>Responsive UI with React:</strong><br />Implemented a user-friendly and responsive frontend using React, ensuring a seamless experience across devices.<br />
2. <strong>Node.js Backend:</strong><br />Developed a robust backend with Node.js, handling server-side logic, API integration, and data management.<br />
3. <strong>AWS EC2 Hosting:</strong><br />Deployed the application on an AWS EC2 instance for scalable and reliable hosting.<br />
4. <strong>Docker Containerization:</strong><br />Implemented Docker for containerization, simplifying the deployment process and ensuring consistency across different environments.<br />
5. <strong>GitHub for Version Control:</strong><br />Utilized GitHub for version control, enabling collaborative development and easy tracking of code changes.<br />
Deployment Process:<br />
1. <strong>Code Development:</strong><br />Wrote modular and maintainable code for both frontend and backend components.<br />
2. <strong>GitHub Repository:</strong><br />Maintained a dedicated GitHub repository to track project versions and facilitate collaboration.<r />
3. <strong>AWS EC2 Instance:</strong><br />Provisioned an EC2 instance on AWS, configuring security groups and ensuring optimal performance.<br />
4. <strong>Docker Build for Production:</strong><br />Implemented Docker to package the application and its dependencies, ensuring consistent and reproducible builds.<br />
5. <strong>Continuous Integration/Continuous Deployment (CI/CD):</strong><br />Set up CI/CD pipelines for automated testing and deployment, streamlining the development lifecycle.<br />Outcome:<br />
The successful deployment of this full-stack web application demonstrates proficiency in React, Node.js, Docker, and AWS. The project highlights skills in creating scalable and maintainable applications, utilizing cloud services, and implementing containerization for efficient deployment.

This project is a testament to my commitment to best practices in web development and my ability to leverage cutting-edge technologies to deliver high-quality solutions.<br /></p2>  
    <button onClick={handleButtonClick}>Go to AboutMe</button>
    </div>
  );
}

export default Projects;

