import React, { useState, useEffect } from "react";
import "./header.css";
import { motion } from 'framer-motion'

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const sectionTop = currentSection.offsetTop - 50;
        const sectionBottom = sectionTop + currentSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          const id = currentSection.getAttribute("id");
          setActiveNav(`#${id}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <motion.a initial={{ opacity: 0, translateX: 90 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }} href="index.html" className="nav_logo logoooooo">
          Ali.
        </motion.a>
        <motion.div
          initial={{ opacity: 0, translateX: -90 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }} className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <motion.li initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0 }}
              viewport={{ once: true }}
              className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </motion.li>
            <motion.li initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              viewport={{ once: true }}
              className="nav__item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </motion.li>
            <motion.li initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
              viewport={{ once: true }}
              className="nav__item">
              <a
                href="#projects"
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Projects
              </a>
            </motion.li>
            <motion.li initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.5 }}
              viewport={{ once: true }}
              className="nav__item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </motion.li>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </motion.div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
