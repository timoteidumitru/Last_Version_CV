import React from "react";
import { motion } from "framer-motion";
import "./menu.scss";
import MenuList from "./MenuList";
import LeftName from "./LeftName";
import TopNav from "./TopNav";

const Menu = () => {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
      transition: {
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    animate: {
      height: 0,
      transition: {
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative z-50 w-full bg-black"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={blackBox}
    >
      <div id="toggle-menu-button" className="menu-wrapper show">
        <MenuList />
        <LeftName />
        <TopNav />
      </div>
    </motion.div>
  );
};

export default Menu;
