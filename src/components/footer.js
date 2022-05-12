import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: copyrights }}
      />
    ) : (
      <>
        <span>© 2020 Ahmed Rafayat</span>
        <span
          className="socialIconsSpan"
          style={{ display: 'flex', marginTop: '2 rem' }}
          target="_blank"
        >
          <div style={{ flex: 5.5 }} />
          <a
            className="socialIcons"
            href="https://github.com/ahmedrafayat"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="1.4em" />
          </a>
          <a
            className="socialIcons"
            href="https://linkedin.com/in/ahmedrafayat/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="1.4em" />
          </a>
          <a
            className="socialIcons"
            href="https://stackoverflow.com/users/10464842/ahmed-rafayat/"
            target="_blank"
            rel="noreferrer"
          >
            <FaStackOverflow size="1.4em" />
          </a>
          <div style={{ flex: 5.5 }} />
        </span>
      </>
    )}
  </footer>
);

Footer.propTypes = {
  copyrights: PropTypes.string,
};

export default Footer;
