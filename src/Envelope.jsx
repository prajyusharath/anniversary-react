import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Envelope({ close }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true); // Open envelope only (no auto-close)
  };

  const handleClosePoem = () => {
    close(); // Manually close everything
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={overlay}
    >
      {/* ENVELOPE AREA */}
      {!opened && (
        <motion.div
          animate={opened ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={envelopeWrapper}
        >
          {/* Envelope Body */}
          <div style={envelopeBody}></div>

          {/* Envelope Flap */}
          <motion.div
            animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 1.2 }}
            style={envelopeFlap}
          ></motion.div>

          {/* Heart Button ON TOP of envelope */}
          <button style={heartButton} onClick={handleOpen}>
            open me
          </button>
        </motion.div>
      )}

      {/* FULLSCREEN WRAPPER FOR POEM */}
      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          style={poemWrapper}
        >
          <div style={poemBox}>
            {/* Close button */}
            <button style={closeButton} onClick={handleClosePoem}>
              ✕
            </button>

            <h2 style={poemTitle}>ishan</h2>
            <p style={poemText}>
              baby ive absolutely loved every moment with you these past six months.
              youre the best partner i couldve ever asked for.
              <br /><br />
              you make me so incredibly happy, and i feel the safest when i am with you.
              i love your kindness, your humor, your intelligence, your passion—your everything.
              <br /><br />
              thank you for choosing me, loving me, caring for me, and handling my tantrums lol.
              <br /><br />
              i love you so so much handsome.
              youre my favorite person in the whole universe.
              <br /><br />— PR
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ------------------ STYLES ------------------ */

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backdropFilter: "blur(8px)",
  background: "rgba(255,255,255,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 50,
};

const envelopeWrapper = {
  position: "relative",
  width: "75vw",
  height: "75vh",
  perspective: "1500px",
};

const envelopeBody = {
  width: "100%",
  height: "100%",
  background: "#ffeef3",
  borderRadius: "14px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  position: "absolute",
  bottom: 0,
};

const envelopeFlap = {
  width: "100%",
  height: "60%",
  background: "#ffd6e6",
  position: "absolute",
  top: 0,
  transformOrigin: "top",
  borderTopLeftRadius: "14px",
  borderTopRightRadius: "14px",
  boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
};

/* HEART BUTTON ON TOP OF ENVELOPE */
const heartButton = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "120px",
  height: "120px",
  background: "pink",
  border: "none",
  borderRadius: "50% 50% 0 0 / 60% 60% 0 0",
  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 50% 78%, 18% 100%, 0% 38%)",
  color: "white",
  fontSize: "18px",
  fontWeight: "700",
  cursor: "pointer",
  zIndex: 10,
  boxShadow: "0 8px 28px rgba(255, 120, 160, 0.55)",
};

const poemWrapper = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 300,
};

const poemBox = {
  width: "80%",
  maxWidth: "430px",
  padding: "30px",
  background: "#f8f0d9", // warm parchment base
  borderRadius: "16px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
  textAlign: "center",
  position: "relative",

  /* ✨ PARchMENT TEXTURE */
  backgroundImage:
    "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
  backgroundSize: "300px 300px",
  backgroundBlendMode: "multiply",

  /* soft vignette */
  boxShadow:
    "inset 0 0 40px rgba(0,0,0,0.15), 0 12px 30px rgba(0,0,0,0.25)",

  border: "1px solid rgba(120, 90, 60, 0.3)",
};

const closeButton = {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  background: "#ffb3c6",
  border: "none",
  color: "white",
  fontSize: "18px",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};

const poemTitle = {
  fontSize: "28px",
  fontFamily: "'Cormorant Garamond', serif",
};

const poemText = {
  marginTop: "12px",
  fontSize: "17px",
  lineHeight: "1.6",
  fontFamily: "'Inter', sans-serif",
};
