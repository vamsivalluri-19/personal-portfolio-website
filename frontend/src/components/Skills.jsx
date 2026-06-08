import React from "react";

const Skills = () => {

  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "HTML",
    "CSS",
    "Data Structures",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;