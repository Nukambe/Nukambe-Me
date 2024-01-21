import { useContext } from "react";

import { FirebaseContext } from "../../context/firebase";

import { motion } from "framer-motion";

export default function Landing() {
  const { personal } = useContext(FirebaseContext);

  return (
    <div>
      <motion.h1
        animate={{ x: [0, 100, 90], fontSize: ["0px", "50px", "40px"] }}
        transition={{ duration: 0.5 }}
      >
        Landing...
      </motion.h1>
      <motion.h2 animate={{ fontSize: 50 }}>{personal.about}</motion.h2>
    </div>
  );
}
