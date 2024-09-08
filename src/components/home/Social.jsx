import React from "react";
import "./social.css";
import { motion } from "framer-motion";
const Social = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -200 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.2 }}
      className="home__social">
      <a href="https://www.linkedin.com/in/ali-osama-295493263/" className="home__social-icon" target="_blank">
        <i class='bx bxl-linkedin' ></i>
      </a>

      <a href="https://www.facebook.com/ali.kemaly/" className="home__social-icon" target="_blank">
        <i class="uil uil-facebook"></i>
      </a>

      <a href="https://github.com/slr8" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
      </a>
    </motion.div>
  );
};

export default Social;
