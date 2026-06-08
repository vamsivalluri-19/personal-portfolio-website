import React from "react";

const Footer = () => {
  return (
    <footer>

      <h3>Vamsi Valluri</h3>

      <p>
        Full Stack Developer | MERN Stack Developer
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', marginBottom: '20px' }}>

        <a
          href="https://github.com/vamsivalluri-19"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </div>

      <p>
        © 2026 All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;