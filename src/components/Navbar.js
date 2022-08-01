import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [hov, setHov] = useState(false);

  const variants = {
    default: { opacity: 0, y: 50 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <div className="navContainer flex flex-row justify-between items-center md:px-10 md:py-5">
      <div
        className="font-lora text-3xl flex flex-row"
        onMouseOver={() => setHov((hov) => !hov)}
        onMouseOut={() => setHov((hov) => !hov)}
      >
        S
        <motion.div
          animate={hov ? "hover" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          hradha
        </motion.div>
      </div>
      <div>Menu</div>
    </div>
  );
};

export default Navbar;
